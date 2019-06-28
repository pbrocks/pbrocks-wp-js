<?php

require __DIR__ . '/block-meta/block-meta.php';
require __DIR__ . '/plugin-sidebar/plugin-sidebar-es5.php';

/**
 * Trigger the block registration on init.
 */
add_action( 'init', 'pbrocks_wp_js_register_block' );
/**
 * Registers the plugin's block.
 *
 * @since 1.0.0
 */
function pbrocks_wp_js_register_block() {
	wp_register_script(
		'pbrocks-wp-js',
		pbrocks_wp_js_url( 'dist/index.js' ),
		array( 'wp-element' ),
		time()
	);
	register_block_type(
		'pbrocks-wp-js/hello-world',
		array(
			'editor_script' => 'pbrocks-wp-js',
		)
	);
	register_post_meta(
		'post',
		'sidebar_meta_toggle_field',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'boolean',
		)
	);
}

add_filter( 'block_categories', 'pbrocks_block_categories', 10, 2 );
/**
 * [pbrocks_block_categories]
 *
 * @param  [type] $categories [description]
 * @param  [type] $post       [description]
 * @return [type]             [description]
 */
function pbrocks_block_categories( $categories, $post ) {
	if ( $post->post_type !== 'post' ) {
		return $categories;
	}
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'pbrocks-wp-js',
				'title' => __( 'PBrocks WP JS', 'pbrocks-wp-js' ),
				'icon'  => 'wordpress',
			),
		)
	);
}


add_filter( 'the_content', 'pbrocks_postmeta_info' );
/**
 * [pbrocks_postmeta_info]
 *
 * @param  [type] $the_content [description]
 * @return [type]              [description]
 */
function pbrocks_postmeta_info( $the_content ) {
	$postmeta = get_post_meta( get_the_ID() );
	$return   = '<pre>FFS ' . print_r( $postmeta, true ) . '</pre>' . $the_content;
	return $return;
}

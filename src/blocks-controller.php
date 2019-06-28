<?php

require __DIR__ . '/block-meta/block-meta.php';
require __DIR__ . '/plugin-sidebar/plugin-sidebar-es5.php';

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
}

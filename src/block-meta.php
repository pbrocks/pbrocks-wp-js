<?php
add_filter( 'the_content', 'pbrocks_postmeta_info' );
function pbrocks_postmeta_info( $the_content ) {
	$postmeta = get_post_meta( get_the_ID() );
	$return   = '<pre>FFS ' . print_r( $postmeta, true ) . '</pre>' . $the_content;
	return $return;
}

/**
 * [pbrocks_wp_js_register_post_meta]
 *
 * https://developer.wordpress.org/block-editor/tutorials/metabox/meta-block-2-register-meta/
 *
 * Note: If the meta key name starts with an underscore WordPress considers it a protected field. Editing this field requires passing a permission check, which is set as the auth_callback in the register_post_meta function.
 *
 * @return [type] [description]
 */
function pbrocks_wp_js_register_post_meta() {
	register_post_meta(
		'post',
		'pbrocks_wp_js_meta_block_field',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
}
add_action( 'init', 'pbrocks_wp_js_register_post_meta' );

/**
 * [pbrocks_wp_js_enqueue]
 *
 * @return [type] [description]
 */
function pbrocks_wp_js_enqueue() {
	wp_enqueue_script(
		'pbrocks-meta',
		plugins_url( 'block-meta/block-meta.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-components' )
	);
}
add_action( 'enqueue_block_editor_assets', 'pbrocks_wp_js_enqueue' );

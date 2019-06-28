<?php
/**
 * [sidebar_plugin_register]
 *
 * @return [type] [description]
 */
function sidebar_plugin_register() {
	wp_register_script(
		'plugin-sidebar-es5',
		plugins_url( 'plugin-sidebar-es5.js', __FILE__ ),
		array( 'wp-plugins', 'wp-edit-post', 'wp-element' ),
		time()
	);
	register_post_meta(
		'post',
		'sidebar_plugin_meta_block_field',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'string',
		)
	);
	register_post_meta(
		'post',
		'sidebar_plugin_meta_checkbox',
		array(
			'show_in_rest' => true,
			'single'       => true,
			'type'         => 'boolean',
		)
	);
	wp_register_style(
		'plugin-sidebar-css',
		plugins_url( 'plugin-sidebar.css', __FILE__ )
	);
}
add_action( 'init', 'sidebar_plugin_register' );

function sidebar_plugin_script_enqueue() {
	wp_enqueue_script( 'plugin-sidebar-es5' );
}
add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_script_enqueue' );

function sidebar_plugin_style_enqueue() {
	wp_enqueue_style( 'plugin-sidebar-css' );
}
add_action( 'enqueue_block_assets', 'sidebar_plugin_style_enqueue' );

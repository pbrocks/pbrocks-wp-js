<?php
/**
 * Plugin Name: PBrocks WP JS
 * Plugin URI: https://github.com/pbrocks/pbrocks-wp-js
 * Description: PBrocks Riad's WordPress JS plugin starter. Forked from https://github.com/youknowriad/wp-js-plugn-starter
 * Version: 1.0.1
 * Author: Riad Benguella & pbrocks
 *
 * @package pbrocks-wp-js
 */
require 'src/blocks-controller.php';
 /**
  * Retrieves a URL to a file in the plugin's directory.
  *
  * @param  string $path Relative path of the desired file.
  *
  * @return string       Fully qualified URL pointing to the desired file.
  *
  * @since 1.0.0
  */
function pbrocks_wp_js_url( $path ) {
	return plugins_url( $path, __FILE__ );
}

<?php

	// load jquery
	function jquery_cdn(){
	  if(!is_admin()){
		wp_deregister_script('jquery');
		wp_register_script('jquery', 'https://code.jquery.com/jquery-3.3.1.min.js', false, null, true);
		wp_enqueue_script('jquery');
	  }
	}
	add_action('wp_enqueue_scripts', 'jquery_cdn');

	// load scripts
	function robersonsmusic_scripts(){
		global $wp_query;
		wp_register_script(
			'slick-script', 
			'//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', 
			array('jquery'), 
			'', 
			true
		);
		wp_register_script(
			'robersonsmusic-script', 
			'/wp-content/themes/robersonsmusic/js/robersonsmusic-script.js', 
			array('jquery'), 
			'', 
			true
		);
		
		wp_enqueue_script( 'slick-script' );
		wp_enqueue_script( 'robersonsmusic-script' );
	}
	add_action('wp_enqueue_scripts', 'robersonsmusic_scripts', 100);
	
	// load styles
	function robersonsmusic_styles(){
		wp_register_style('slick', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
		wp_register_style('robersonsmusic', get_template_directory_uri() . '/style.css');

		wp_enqueue_style('slick');
		wp_enqueue_style('robersonsmusic');
	}
	add_action('wp_enqueue_scripts', 'robersonsmusic_styles');

	// load fonts
	function load_fonts() {
		wp_enqueue_style( 'font-awesome', '//use.fontawesome.com/releases/v5.3.1/css/all.css' );
		wp_enqueue_style( 'minion-myriad', '//use.typekit.net/nez8wct.css' );
		wp_enqueue_style( 'nunito-sans', '//fonts.googleapis.com/css?family=Nunito+Sans:400,600,700' );
	}
	add_action( 'wp_enqueue_scripts', 'load_fonts' );

	// Register Navigation Menus
	register_nav_menus( array(
		'main_menu' => 'Main Menu',
	) );

	// Custom Blocks Category
	function custom_blocks_category( $categories, $post ){
		return array_merge(
			array(
				array(
					'slug'	=> 'custom-blocks',
					'title'	=> __( 'Custom Blocks', 'custom-blocks' )
				)
			),
			$categories
		);
	}
	add_filter( 'block_categories', 'custom_blocks_category', 10, 2 );

	function custom_editor_styles(){
		wp_enqueue_style( 'editor-styles', get_stylesheet_directory_uri()  .'/css/editor-styles.css' );
	}
	add_action( 'enqueue_block_editor_assets', 'custom_editor_styles' );

	function robersonsmusic_color_palette(){
		add_theme_support(
			'editor-color-palette', array(
				array(
					'name'		=> 'Blue',
					'slug'		=> 'blue',
					'color'		=> '#1c60c6'
				),
				array(
					'name'		=> 'Ribbon Blue',
					'slug'		=> 'ribbon-blue',
					'color'		=> '#1271ff'
				),
				array(
					'name'		=> 'Light Blue',
					'slug'		=> 'light-blue',
					'color'		=> '#80e2ff'
				),
				array(
					'name'		=> 'Dark Blue',
					'slug'		=> 'dark-blue',
					'color'		=> '#01607c'
				),
				array(
					'name'		=> 'Gold',
					'slug'		=> 'gold',
					'color'		=> '#ee7904'
				),
				array(
					'name'		=> 'Silver',
					'slug'		=> 'silver',
					'color'		=> '#a9a9a9'
				),
				array(
					'name'		=> 'Grey',
					'slug'		=> 'grey',
					'color'		=> '#707070'
				),
				array(
					'name'		=> 'Ebony',
					'slug'		=> 'ebony',
					'color'		=> '#222c34'
				),
				array(
					'name'		=> 'Black',
					'slug'		=> 'black',
					'color'		=> '#000000'
				),
				array(
					'name'		=> 'White',
					'slug'		=> 'white',
					'color'		=> '#ffffff'
				),
			)
		);
	}
	add_action( 'after_setup_theme', 'robersonsmusic_color_palette' );

	include "functions/options_page.php";
	include "functions/custom-nav-walker.php";
	include "functions/gutenberg-blocks.php";
?>

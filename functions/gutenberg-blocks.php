<?php

///////////////////////////////////////////////////////////////////////////////
// DEPENDENCIES                                                              //
///////////////////////////////////////////////////////////////////////////////
function load_dependencies(){
    wp_register_script(
        'dependencies-script',
        get_template_directory_uri() . '/js/block-dependencies.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_enqueue_script( 'dependencies-script' );
}
add_action( 'init', 'load_dependencies', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// CONTAINER                                                                 //
///////////////////////////////////////////////////////////////////////////////
function container_block(){
    wp_register_script(
        'container-script',
        get_template_directory_uri() . '/js/block-container.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    register_block_type('childress/container', array(
        'editor_script' => 'container-script',
    ) );
}
add_action( 'init', 'container_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// CAROUSEL                                                                  //
///////////////////////////////////////////////////////////////////////////////
function carousel_block(){
    wp_register_script(
        'carousel-script',
        get_template_directory_uri() . '/js/block-carousel.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'carousel-editor-style',
        get_template_directory_uri() . '/css/block-carousel-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'carousel-style',
        get_template_directory_uri() . '/css/block-carousel-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/carousel', array(
        'editor_script' => 'carousel-script',
        'editor_style'  => 'carousel-editor-style',
        'style'  => 'carousel-style',
    ) );
}
add_action( 'init', 'carousel_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// LEARN MORE                                                                //
///////////////////////////////////////////////////////////////////////////////
function learn_more_block(){
    wp_register_script(
        'learn-more-script',
        get_template_directory_uri() . '/js/block-learn-more.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'learn-more-editor-style',
        get_template_directory_uri() . '/css/block-learn-more-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'learn-more-style',
        get_template_directory_uri() . '/css/block-learn-more-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/learn-more', array(
        'editor_script' => 'learn-more-script',
        'editor_style'  => 'learn-more-editor-style',
        'style'  => 'learn-more-style',
    ) );
}
add_action( 'init', 'learn_more_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// PASSION                                                                   //
///////////////////////////////////////////////////////////////////////////////
function passion_block(){
    wp_register_script(
        'passion-script',
        get_template_directory_uri() . '/js/block-passion.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'passion-editor-style',
        get_template_directory_uri() . '/css/block-passion-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'passion-style',
        get_template_directory_uri() . '/css/block-passion-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/passion', array(
        'editor_script' => 'passion-script',
        'editor_style'  => 'passion-editor-style',
        'style'  => 'passion-style',
    ) );
}
add_action( 'init', 'passion_block', 10, 0 );

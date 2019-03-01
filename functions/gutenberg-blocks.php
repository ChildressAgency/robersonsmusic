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

///////////////////////////////////////////////////////////////////////////////
// SECTION HEADING                                                           //
///////////////////////////////////////////////////////////////////////////////
function section_heading_block(){
    wp_register_script(
        'section-heading-script',
        get_template_directory_uri() . '/js/block-section-heading.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'section-heading-editor-style',
        get_template_directory_uri() . '/css/block-section-heading-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'section-heading-style',
        get_template_directory_uri() . '/css/block-section-heading-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/section-heading', array(
        'editor_script' => 'section-heading-script',
        'editor_style'  => 'section-heading-editor-style',
        'style'  => 'section-heading-style',
    ) );
}
add_action( 'init', 'section_heading_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// VIDEO PRESENTATION                                                        //
///////////////////////////////////////////////////////////////////////////////
function video_presentation_block(){
    wp_register_script(
        'video-presentation-script',
        get_template_directory_uri() . '/js/block-video-presentation.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'video-presentation-editor-style',
        get_template_directory_uri() . '/css/block-video-presentation-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'video-presentation-style',
        get_template_directory_uri() . '/css/block-video-presentation-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/video-presentation', array(
        'editor_script' => 'video-presentation-script',
        'editor_style'  => 'video-presentation-editor-style',
        'style'  => 'video-presentation-style',
    ) );
}
add_action( 'init', 'video_presentation_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// REVIEWS                                                                   //
///////////////////////////////////////////////////////////////////////////////
function reviews_block(){
    wp_register_script(
        'reviews-script',
        get_template_directory_uri() . '/js/block-reviews.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'reviews-editor-style',
        get_template_directory_uri() . '/css/block-reviews-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'reviews-style',
        get_template_directory_uri() . '/css/block-reviews-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/reviews', array(
        'editor_script' => 'reviews-script',
        'editor_style'  => 'reviews-editor-style',
        'style'  => 'reviews-style',
    ) );
}
add_action( 'init', 'reviews_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// HERO                                                                      //
///////////////////////////////////////////////////////////////////////////////
function hero_block(){
    wp_register_script(
        'hero-script',
        get_template_directory_uri() . '/js/block-hero.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'hero-editor-style',
        get_template_directory_uri() . '/css/block-hero-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'hero-style',
        get_template_directory_uri() . '/css/block-hero-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/hero', array(
        'editor_script' => 'hero-script',
        'editor_style'  => 'hero-editor-style',
        'style'  => 'hero-style',
    ) );
}
add_action( 'init', 'hero_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// TEAM                                                                      //
///////////////////////////////////////////////////////////////////////////////
function team_block(){
    wp_register_script(
        'team-script',
        get_template_directory_uri() . '/js/block-team.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'team-editor-style',
        get_template_directory_uri() . '/css/block-team-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'team-style',
        get_template_directory_uri() . '/css/block-team-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/team', array(
        'editor_script' => 'team-script',
        'editor_style'  => 'team-editor-style',
        'style'  => 'team-style',
    ) );
}
add_action( 'init', 'team_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// SERVICES                                                                  //
///////////////////////////////////////////////////////////////////////////////
function services_block(){
    wp_register_script(
        'services-script',
        get_template_directory_uri() . '/js/block-services.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'services-editor-style',
        get_template_directory_uri() . '/css/block-services-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'services-style',
        get_template_directory_uri() . '/css/block-services-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/services', array(
        'editor_script' => 'services-script',
        'editor_style'  => 'services-editor-style',
        'style'  => 'services-style',
    ) );
}
add_action( 'init', 'services_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// IMAGE & TEXT                                                              //
///////////////////////////////////////////////////////////////////////////////
function image_text_block(){
    wp_register_script(
        'image-text-script',
        get_template_directory_uri() . '/js/block-image-text.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'image-text-editor-style',
        get_template_directory_uri() . '/css/block-image-text-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'image-text-style',
        get_template_directory_uri() . '/css/block-image-text-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/image-text', array(
        'editor_script' => 'image-text-script',
        'editor_style'  => 'image-text-editor-style',
        'style'  => 'image-text-style',
    ) );
}
add_action( 'init', 'image_text_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// PRICE BOXES                                                               //
///////////////////////////////////////////////////////////////////////////////
function price_boxes_block(){
    wp_register_script(
        'price-boxes-script',
        get_template_directory_uri() . '/js/block-price-boxes.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'price-boxes-editor-style',
        get_template_directory_uri() . '/css/block-price-boxes-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'price-boxes-style',
        get_template_directory_uri() . '/css/block-price-boxes-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/price-boxes', array(
        'editor_script' => 'price-boxes-script',
        'editor_style'  => 'price-boxes-editor-style',
        'style'  => 'price-boxes-style',
    ) );
}
add_action( 'init', 'price_boxes_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// LINK W/ LINE                                                              //
///////////////////////////////////////////////////////////////////////////////
function link_line_block(){
    wp_register_script(
        'link-line-script',
        get_template_directory_uri() . '/js/block-link-line.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'link-line-editor-style',
        get_template_directory_uri() . '/css/block-link-line-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'link-line-style',
        get_template_directory_uri() . '/css/block-link-line-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/link-line', array(
        'editor_script' => 'link-line-script',
        'editor_style'  => 'link-line-editor-style',
        'style'  => 'link-line-style',
    ) );
}
add_action( 'init', 'link_line_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// CHECK LIST                                                                //
///////////////////////////////////////////////////////////////////////////////
function checklist_block(){
    wp_register_script(
        'checklist-script',
        get_template_directory_uri() . '/js/block-checklist.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'checklist-editor-style',
        get_template_directory_uri() . '/css/block-checklist-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'checklist-style',
        get_template_directory_uri() . '/css/block-checklist-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/checklist', array(
        'editor_script' => 'checklist-script',
        'editor_style'  => 'checklist-editor-style',
        'style'  => 'checklist-style',
    ) );
}
add_action( 'init', 'checklist_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// INSPIRATION BOXES                                                         //
///////////////////////////////////////////////////////////////////////////////
function inspiration_boxes_block(){
    wp_register_script(
        'inspiration-boxes-script',
        get_template_directory_uri() . '/js/block-inspiration-boxes.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'inspiration-boxes-editor-style',
        get_template_directory_uri() . '/css/block-inspiration-boxes-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'inspiration-boxes-style',
        get_template_directory_uri() . '/css/block-inspiration-boxes-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/inspiration-boxes', array(
        'editor_script' => 'inspiration-boxes-script',
        'editor_style'  => 'inspiration-boxes-editor-style',
        'style'  => 'inspiration-boxes-style',
    ) );
}
add_action( 'init', 'inspiration_boxes_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// INSTRUMENTS                                                              //
///////////////////////////////////////////////////////////////////////////////
function instruments_block(){
    wp_register_script(
        'instruments-script',
        get_template_directory_uri() . '/js/block-instruments.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'instruments-editor-style',
        get_template_directory_uri() . '/css/block-instruments-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'instruments-style',
        get_template_directory_uri() . '/css/block-instruments-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/instruments', array(
        'editor_script' => 'instruments-script',
        'editor_style'  => 'instruments-editor-style',
        'style'  => 'instruments-style',
    ) );
}
add_action( 'init', 'instruments_block', 10, 0 );

///////////////////////////////////////////////////////////////////////////////
// ICON GRID                                                                 //
///////////////////////////////////////////////////////////////////////////////
function icon_grid_block(){
    wp_register_script(
        'icon-grid-script',
        get_template_directory_uri() . '/js/block-icon-grid.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );

    wp_register_style(
        'icon-grid-editor-style',
        get_template_directory_uri() . '/css/block-icon-grid-editor-style.css',
        array( 'wp-edit-blocks' )
    );

    wp_register_style(
        'icon-grid-style',
        get_template_directory_uri() . '/css/block-icon-grid-style.css',
        array( 'wp-edit-blocks' )
    );

    register_block_type('childress/icon-grid', array(
        'editor_script' => 'icon-grid-script',
        'editor_style'  => 'icon-grid-editor-style',
        'style'  => 'icon-grid-style',
    ) );
}
add_action( 'init', 'icon_grid_block', 10, 0 );

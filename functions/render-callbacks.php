<?php

function post_display_callback( $attributes, $content ){
    $result = '<section class="wp-block-childress-post-display post-display">
                <div class="container">';

    // if( isset( $attributes['category'] ) )
    //     $terms = explode( ',', $attributes['category'] );
    // else
    //     $terms = array( 'elite-1' );

    $args = array(
        'posts_per_page'    => 3,
        'post_type'         => 'post',
        'orderby'           => 'date',
        'order'             => 'DESC',
    );

    $query = new WP_Query( $args );

    if( $query->have_posts() ){
        while( $query->have_posts() ){
            $query->the_post();
            $blocks = '';
            $template = '';
            $attr = '';
            $inner = '';

            if( has_blocks( get_the_content() ) ){
                $blocks = parse_blocks( get_the_content() );
            }

            if( $blocks ){
                foreach( $blocks as $block ){
                    if( 'childress/post-template' == $block['blockName'] ){
                        $template = $block;
                    }
                }
            }

            if( $template ){
                $attr = $template['attrs'];
                $inner = $template['innerBlocks'];
            }

            // echo '<pre>';
            // echo var_dump( $template );
            // echo '</pre>';

            // $result .= '<img src="' . $attr['imageUrl'] . '" alt="' . $attr['imageAlt'] . '" class="wp-image-' . $attr['imageId'] . '" />'
            //     . '<h3>' . get_the_title() . '</h3>';

            $result .= '<section class="wp-block-childress-image-text image-text image-text--post-display container image-text--heading-em-top">
                <div class="image-text__heading">
                    <h2>' . get_the_category()[0]->name . '</h2>
                </div>
                <div class="image-text__inner">
                    <div class="image-text__img">
                        <div class="image-text__background"></div>
                        <img src="' . $attr['imageUrl'] . '" alt="' . $attr['imageAlt'] . '" class="wp-image-' . $attr['imageId'] . '" />
                    </div>
                    <div class="image-text__text">
                        <h2>' . get_the_title() . '</h2>
                        <p class="image-text__date">' . get_the_date() . '</p>';

            $result .= mb_strimwidth( $inner[0]['innerHTML'], 0, 300, '...' );

            $result .= '</div>
                </div>
            </section>';

            wp_reset_postdata();
        }
    }

    $result .= '</div>
            </section>';

    return $result;
}
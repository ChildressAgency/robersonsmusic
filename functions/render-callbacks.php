<?php

function post_display_callback( $attributes, $content ){
    $result = '<section class="wp-block-childress-post-display post-display container">';

    // if( isset( $attributes['category'] ) )
    //     $terms = explode( ',', $attributes['category'] );
    // else
    //     $terms = array( 'elite-1' );

    $args = array(
        'posts_per_page'    => 5,
        'post_type'         => 'post',
        'orderby'           => 'date',
        'order'             => 'DESC',
    );

    $postIndex = 0;

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

            // put the last word in the heading on a new line
            $heading = get_the_category()[0]->name;
            $last_word_start = strrpos( $heading ,' ' ) + 1;
            $first_line = substr( $heading, 0, $last_word_start );
            $second_line = substr( $heading, $last_word_start );
            $heading = $first_line . '<br/>' . $second_line;

            $result .= '<section class="wp-block-childress-image-text image-text image-text--post-display container image-text--heading-em-top">';

            if( $postIndex == 0 ){
                $result .= '<div class="image-text__heading">
                    <h2>' . $heading . '</h2>
                </div>';
            }

            $result .= '<div class="image-text__inner">
                    <div class="image-text__img">
                        <div class="image-text__background"></div>
                        <img src="' . $attr['imageUrl'] . '" alt="' . $attr['imageAlt'] . '" class="wp-image-' . $attr['imageId'] . '" />
                    </div>
                    <div class="image-text__text">
                        <h2>' . get_the_title() . '</h2>
                        <p class="image-text__date">' . get_the_date() . '</p>';

            $result .= mb_strimwidth( $inner[0]['innerHTML'], 0, 300, '...' );

            $result .= '<div class="wp-block-childress-link-line link-line"><a class="link-line__link" href="' . get_the_permalink() . '">Read More</a></div>
                    </div>
                </div>
            </section>';

            $postIndex++;
            wp_reset_postdata();
        }
    }

    $result .= '</section>';

    return $result;
}
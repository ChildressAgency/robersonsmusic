<?php get_header(); ?>

    <?php if( have_posts() ): while( have_posts() ): the_post(); ?>
        <?php 
        global $post;
        $blocks = '';
        $projectTemplate = '';
        $inner = '';
        $attr = '';

        if( has_blocks( $post->post_content ) ){
            $blocks = parse_blocks( $post->post_content );
        } 

        if( $blocks ){
            foreach( $blocks as $block ){
                if( 'childress/post-template' == $block['blockName'] ){
                    $projectTemplate = $block;

                    $inner = $block['innerBlocks'];
                }
            }
        }

        if( $projectTemplate ){
            $attr = $projectTemplate['attrs'];
        } 

        $terms = get_the_terms( $post->ID, 'category' ); ?>

        <div class="blog-post">
            <section class='wp-block-childress-hero hero hero--blog'>
                <img src='<?php echo get_option( 'blog-header-image' ); ?>' class='hero__img' />
                <h2 class='hero__title'>BLOG</h2>
            </section>

            <section class='wp-block-childress-image-text image-text image-text--blog container image-text--heading-em-top'>
                <div class='image-text__heading'>
                    <h2><?php echo get_the_category()[0]->name; ?></h2>
                </div>
                <div class='image-text__inner'>
                    <div class="image-text__img">
                        <div class='image-text__background'></div>
                        <img src='<?php echo $attr['imageUrl']; ?>' alt='<?php echo $attr['imageAlt']; ?>' class='wp-image-<?php echo $attr['imageId']; ?>' />
                    </div>
                </div>
            </section>

            <div class="container">
                <section class='blog-post__info'>
                    <h1 class='blog-post__title'><?php echo get_the_title(); ?></h1>
                    <p class='blog-post__date'><?php echo get_the_date(); ?></p>
                </section>

                <section class='blog-post__content'>
                    <?php foreach( $inner as $block ){ ?>
                        <?php echo $block['innerHTML']; ?>
                    <?php } ?>
                </section>

                <section class='blog-post__meta'>
                    <div class='blog-post__cats'>
                        <a href='<?php echo home_url( get_the_category()[0]->slug ); ?>'><i class="fas fa-folder-open"></i><?php echo get_the_category()[0]->name; ?></a>
                    </div>
                    <?php 
                    $tags = get_the_tags();
                    if( $tags ){ ?>
                        <div class="blog-post__tags">
                            <i class="fas fa-tags"></i><?php foreach( $tags as $key => $value ){ ?>
                                <a href='<?php echo home_url( $value->slug ); ?>' ?><?php echo $value->name; ?></a><?php if( $key !== count( $tags ) - 1 ) echo ', '; ?>
                            <?php } ?>
                        </div>
                    <?php } ?>
                </section>

                <section class='blog-post__prev-next'>
                    <?php 
                    $next = get_next_post( true );
                    $prev = get_previous_post( true ); ?>

                    <?php if( $prev ){ ?>
                        <span>&lt; <a href='<?php echo home_url( $prev->post_name ); ?>'>Previous</a></span>
                    <?php } ?>

                    <?php if( $next ){ ?>
                        <span><a href='<?php echo home_url( $next->post_name ); ?>'>Next</a> &gt;</span>
                    <?php } ?>
                </section>

                <?php
                    $tags = wp_get_post_tags( $post->ID );

                    if ( $tags ) { 
                        $tag_IDs = array();

                        foreach( $tags as $tag ){
                            array_push( $tag_IDs, $tag->term_id );
                        }

                        $args = array(
                            'tag__in'           => $tag_IDs,
                            'post__not_in'      => array($post->ID),
                            'posts_per_page'    => 3,
                        );

                        $query = new WP_Query($args);
                        if( $query->have_posts() ) { ?>
                            <section class='blog-post__related'>
                                <h2>Related Posts</h2>
                                <p>Take a look at these posts</p>

                                <div class="blog-post__related-posts">

                                    <?php while ( $query->have_posts() ){ 
                                        $query->the_post();
                                        if( has_blocks( $post->post_content ) ){
                                            $blocks = parse_blocks( $post->post_content );
                                        } 

                                        if( $blocks ){
                                            foreach( $blocks as $block ){
                                                if( 'childress/post-template' == $block['blockName'] ){
                                                    $projectTemplate = $block;

                                                    $inner = $block['innerBlocks'];
                                                }
                                            }
                                        }

                                        if( $projectTemplate ){
                                            $attr = $projectTemplate['attrs'];
                                        } ?>

                                        <a href='<?php echo get_the_permalink(); ?>' class='blog-post__related-post'>
                                            <img src='<?php echo $attr["imageUrl"]; ?>' alt='<?php echo $attr["imageAlt"]; ?>' class='wp-image-<?php echo $attr["imageId"]; ?>' />
                                            <h3><?php echo get_the_title(); ?></h3>
                                        </a>
                                 
                                    <?php } ?>
                                </div>
                            </section>
                        <?php }
                        wp_reset_query();
                    }
                ?>
            </div>
        </div>

    <?php endwhile; endif; ?>

<?php get_footer(); ?>

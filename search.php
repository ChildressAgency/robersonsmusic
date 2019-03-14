<?php get_header(); ?>
    <main id="main">
        <section class="content">
            <div class="container">
                <div class="section">
                    <div class="page-heading">
                        <div class="page-heading__heading">
                            <h2 class="page-heading__title">Search Results</h2>
                        </div>
                    </div>
                </div>
                <?php if(have_posts()): while(have_posts()): the_post(); ?>
                    <div class='container'>
                        <h2 class="page-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                        <article>
                            <?php
                                if( get_the_excerpt() ){
                                    echo '<p>' . get_the_excerpt() . '</p>';
                                }
                            ?>
                        </article>
                    </div>
                    <hr />
                <?php endwhile; endif; ?>
            </div>
        </section>
    </main>
<?php get_footer(); ?>
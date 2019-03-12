<?php

/*
 * If the current post is protected by a password and the visitor has not yet
 * entered the password we will return early without loading the comments.
 */
if ( post_password_required() )
    return;
?>

<section class='comments'>
    <p class='comments__title'><?php echo get_comments_number(); ?> comment<?php if( get_comments_number() != 1 ) echo 's'; ?></p>
    <?php if( get_comments_number() > 0 ){ ?><p class='comments__subtitle'>Join the conversation</p><?php } ?>

    <?php 
    // wp_list_comments( array(
    //     'style'         => 'ol',
    //     'short_ping'    => 'true'
    // ) ); ?>

    <?php 
    $comments = get_comments( array(
        'post_id'   => $post->ID
    ) );

    foreach( $comments as $comment ){ 
        // echo '<pre>';
        // echo var_dump( $comment );
        // echo '</pre>';
        ?>
        <div class='comment'>
            <p class='comment__name'><?php echo $comment->comment_author; ?></p>
            <p class='comment__date'><?php echo date( 'F d, Y', strtotime( $comment->comment_date ) ); ?></p>
            <div class='comment__content'>
                <img class='comment__img' src='<?php echo get_avatar_url( $comment ); ?>' />
                <p class='comment__text'><?php echo $comment->comment_content; ?></p>
            </div>
        </div>

    <?php } ?>

    <p class='comments__title'>Join the Conversation</p>

    <div id='respond' class='comment-respond'>
        <form action='<?php echo get_option( 'siteurl' ); ?>/wp-comments-post.php' method='post' id='commentform' class='comment-form'>
            <input id='author' name='author' value='' type='text' placeholder='Your Name*' required="required" aria-required='true' />
            <input id='email' name='email' value='' type='text' placeholder='Your Email*' required="required" aria-required='true' />
            <textarea id="comment" name="comment" rows="8" maxlength="65525" required="required" placeholder="Your Message"></textarea>
            <p class='form-submit'>
                <input name='submit' type='submit' id='submit' class='submit' value='Post Comment' />
                <input type='hidden' name='comment_post_ID' value='<?php echo $post->ID; ?>' id='comment_post_ID' />
            </p>
            <input type='hidden' id='_wp_unfiltered_html_comment_disabled' name='_wp_unfiltered_html_comment_disabled' value='8a0d8a782b' />
            <script>(function(){if(window===window.parent){document.getElementById('_wp_unfiltered_html_comment_disabled').name='_wp_unfiltered_html_comment';}})();</script>
        </form>
    </div>

</section>

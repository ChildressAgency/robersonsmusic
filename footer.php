
    <footer class="footer">
        <div class="footer__grid">
            <div class="footer__grid-section">
                <h3 class="footer__section-heading">Our Location</h3>
                <!-- <img class="footer__squiggle" src="/wp-content/uploads/2018/11/squiggly-underline.png" alt=""> -->
                <img class="footer__squiggle" src="<?php echo get_option( 'footer-separator' ); ?>" alt="">
                <p><?php echo get_option( 'address' ); ?></p>
                <p><strong>Hours:</strong> <?php echo get_option( 'hours' ); ?></p>
            </div>
            <div class="footer__grid-section">
                <h3 class="footer__section-heading">Contact Us</h3>
                <img class="footer__squiggle" src="<?php echo get_option( 'footer-separator' ); ?>" alt="">
                <p><a href="tel:<?php echo get_option( 'phone' ); ?>"><?php echo get_option( 'phone' ); ?></a></p>
                <img src="<?php echo get_option( 'footer-top-hat' ); ?>" alt="top hat">
                <h3 class="footer__section-heading">We're Social</h3>
                <div class="footer__social">
                    <?php if( get_option( 'facebook' ) ): ?><a href="<?php echo get_option( 'facebook' ); ?>"><i class="fab fa-facebook-f"></i></a><?php endif; ?>
                    <?php if( get_option( 'twitter' ) ): ?><a href="<?php echo get_option( 'twitter' ); ?>"><i class="fab fa-twitter"></i></a><?php endif; ?>
                    <?php if( get_option( 'instagram' ) ): ?><a href="<?php echo get_option( 'instagram' ); ?>"><i class="fab fa-instagram"></i></a><?php endif; ?>
                    <?php if( get_option( 'linkedin' ) ): ?><a href="<?php echo get_option( 'linkedin' ); ?>"><i class="fab fa-linkedin-in"></i></a><?php endif; ?>
                    <?php if( get_option( 'pinterest' ) ): ?><a href="<?php echo get_option( 'pinterest' ); ?>"><i class="fab fa-pinterest"></i></a><?php endif; ?>
                </div>
            </div>
            <div class="footer__grid-section">
                <h3 class="footer__section-heading">Get Our Email Updates</h3>
                <img class="footer__squiggle" src="<?php echo get_option( 'footer-separator' ); ?>" alt="">
                <p>Connect with us. We'll add you to our email updates.</p>
                <a href="#_" class="btn btn--primary">Connect</a>
            </div>
            <div class="footer__grid-section">
                <img src="<?php echo get_option( 'ssl-cert' ); ?>" alt="ssl cert">
                <h3 class="footer__section-heading">SSL Certificate</h3>
                <p>Forms and Payment are Secure.</p>
            </div>
        </div>
        <div class="footer__copyright"><?php echo get_option( 'copyright' ); ?></div>
    </footer>
    
    <?php wp_footer(); ?>
</body>
</html>
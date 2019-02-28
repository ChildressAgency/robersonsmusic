$(document).ready(function(){

    /**
     * HEADER NAVIGATION
     */
    $header_nav = $( '.header__nav' ).find( '.navbar__nav' );
    $header_nav_height = 0;

    $( '.navbar__toggler' ).click(function(){
            $header_nav_height = 0;
            $header_nav.children().each(function(){
                $header_nav_height += $( this ).outerHeight();
            });

        if( $header_nav.hasClass( 'navbar__open' ) ){
            $header_nav.removeClass( 'navbar__open' );
            $header_nav.css( 'max-height', '0' );
        } else {
            $header_nav.addClass( 'navbar__open' );
            $header_nav.css( 'max-height', $header_nav_height + 'px' );
        }
    });
    

    /**
     * Homepage Carousel
     */
    $( '.carousel__slides' ).slick({
        infinite:           true,
        dots:               true,
        slidesToShow:       1,
        slidesToScroll:     1,
        autoplay:           true,
        autoplaySpeed:      5000,
        arrows:             true,
        nextArrow:          $( '.carousel__next' ),
        prevArrow:          $( '.carousel__prev' )
    });

    /**
     * Reviews Carousel
     */
    $( '.reviews__slides' ).slick({
        infinite:           true,
        dots:               true,
        slidesToShow:       1,
        slidesToScroll:     1,
        autoplay:           true,
        autoplaySpeed:      5000,
        arrows:             false,
        adaptiveHeight:     true
    });


    /**
     * INSTRUMENTS
     */
    function instrumentsResizeList(){
        $instruments = $( '.wp-block-childress-instruments' );

        $instruments.each( function(){
            $children = $( this ).children( '.wp-block-childress-instrument' );

            $height = 0;

            $children.each( function(){
                $this = $( this ).find( '.instrument-list--eligible' );
                $this.css( 'height', 'auto' );
                $tempHeight = $this.outerHeight();

                if( $tempHeight > $height ){
                    $height = $tempHeight;
                }
            } );

            if( $( window ).width() > 768 ){
                $children.each( function(){
                    $( this ).find( '.instrument-list--eligible' ).css( 'height', $height );
                } );
            }
        });
    }
    instrumentsResizeList();

    $( window ).resize( function(){
        instrumentsResizeList();
    } );
});

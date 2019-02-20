registerBlockType( 'childress/carousel', {
    title: 'Carousel',
    icon: createElement('svg', 
        { 
            width: 24,
            height: 24,
            viewBox: '0 0 24 24'
        },
        createElement( 'path',
            {
                d: 'M 7 3 C 6.447 3 6 3.447 6 4 L 6 20 C 6 20.553 6.447 21 7 21 L 17 21 C 17.553 21 18 20.553 18 20 L 18 4 C 18 3.447 17.553 3 17 3 L 7 3 z M 3 5 C 2.447 5 2 5.447 2 6 L 2 18 C 2 18.553 2.447 19 3 19 L 4 19 L 4 17 L 4 7 L 4 5 L 3 5 z M 20 5 L 20 7 L 20 17 L 20 19 L 21 19 C 21.553 19 22 18.553 22 18 L 22 6 C 22 5.447 21.553 5 21 5 L 20 5 z'
            }
        )
    ),
    category: 'custom-blocks',

    edit( { attributes, className, setAttributes } ) {
        return (
            <section className={ className + ' carousel' }>
                <div className='carousel__slides'>
                    <InnerBlocks
                        allowedBlocks={['childress/carousel-slide']}
                        template={[
                            ['childress/carousel-slide']
                        ]}
                    />
                </div>
            </section>
        );
    },

    save( { attributes } ) {
        return (
            <section className='carousel'>
                <div className='carousel__slides'>
                    <InnerBlocks.Content />
                </div>
                <div class='carousel__arrow carousel__prev'><i class='fas fa-angle-left'></i></div>
                <div class='carousel__arrow carousel__next'><i class='fas fa-angle-right'></i></div>
            </section>
        );
    },
} );

registerBlockType( 'childress/carousel-slide', {
    title: 'Carousel Slide',
    icon: 'format-image',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        imageUrl: {
            type: 'string'
        },
        imageAlt: {
            type: 'string'
        },
        imageId: {
            type: 'number'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className={ className + ' carousel__slide' } style={{ backgroundImage: `url(${ imageUrl })` }}>
                <div className='carousel__slide-inner'>
                    <MediaUpload
                        onSelect={ media => { setAttributes({ imageUrl: media.url, imageAlt: media.alt, imageId: media.id }); } }
                        type="image"
                        value={ imageId }
                        render={ ({ open }) => (
                            <Button className={ 'button button-large' } onClick={ open }>
                                { 'Set Background' }
                            </Button>
                        ) }
                    />
                    <InnerBlocks />
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className='carousel__slide' style={{ backgroundImage: `url(${ imageUrl })` }}>
                <div className='carousel__slide-inner'>
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    },
} );

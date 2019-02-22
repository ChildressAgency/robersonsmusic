registerBlockType( 'childress/hero', {
    title: 'Hero',
    icon: 'format-image',
    category: 'custom-blocks',

    attributes: {
        title: {
            type: 'string'
        },
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
        const { title, imageUrl, imageAlt, imageId } = attributes;

        return (
            <section className={ className + ' hero' }>
                <MediaUpload
                    label='BackgroundImage'
                    onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt, imageId: media.id } ) } }
                    type='image'
                    value={ imageUrl }
                    render={ ({ open }) => (
                        <Button className={ 'button button-large' } onClick={ open }>
                            { 'Select Background Image' }
                        </Button>
                    ) }
                />
                <img className='hero__img' src={ imageUrl } />
                <h1 className='hero__title'>
                    <PlainText
                        value={ title }
                        onChange={ ( value ) => { setAttributes({ title: value }) } }
                        placeholder='Title'
                    />
                </h1>
            </section>
        );
    },

    save( { attributes } ) {
        const { title, imageUrl, imageAlt, imageId } = attributes;

        return (
            <section className='hero'>
                <img src={ imageUrl } alt={ imageAlt } className={ 'hero__img wp-image-' + imageId } />
                <h1 className='hero__title'>{ title }</h1>
            </section>
        );
    },
} );

registerBlockType( 'childress/inspiration-boxes', {
    title: 'Inspiration Boxes',
    icon: 'format-image',
    category: 'custom-blocks',

    attributes: {

    },

    edit( { attributes, className, setAttributes } ) {
        return (
            <section className={ className + ' inspiration-boxes' }>
                <InnerBlocks
                    allowedBlocks={['childress/inspiration-box']}
                    template={[
                        ['childress/inspiration-box'],
                        ['childress/inspiration-box'],
                        ['childress/inspiration-box']
                    ]}
                    templateLock='all'
                />
            </section>
        );
    },

    save( { attributes } ) {
        return (
            <section className='inspiration-boxes'>
                <InnerBlocks.Content />
            </section>
        );
    },
} );

registerBlockType( 'childress/inspiration-box', {
    title: 'Inspiration Box',
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
        title: {
            type: 'string'
        },
        text: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { title, text, imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className={ className + ' inspiration-box' }>
                <MediaUpload
                    label='Image'
                    onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt, imageId: media.id } ) } }
                    type='image'
                    value={ imageUrl }
                    render={ ({ open }) => (
                        <Button className={ imageId ? 'image-button' : 'button button-large' } onClick={ open }>
                            { imageId ? <img className='inspiration-box__img' src={ imageUrl } /> : 'Select Image' }
                        </Button>
                    ) }
                />
                <div className='inspiration-box__info'>
                    <h3 className='inspiration-box__title'>
                        <PlainText
                            value={ title }
                            onChange={ ( value ) => { setAttributes({ title: value }) } }
                            placeholder='Title'
                        />
                    </h3>
                    <p className='inspiration-box__text'>
                        <PlainText
                            value={ text }
                            onChange={ ( value ) => { setAttributes({ text: value }) } }
                            placeholder='Text'
                        />
                    </p>
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { title, text, imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className='inspiration-box'>
                <img src={ imageUrl } alt={ imageAlt } className={ 'inspiration-box__img wp-image-' + imageId } />
                <div className='inspiration-box__info'>
                    <h1 className='inspiration-box__title'>{ title }</h1>
                    <p className='inspiration-box__text'>{ text }</p>
                </div>
            </div>
        );
    },
} );

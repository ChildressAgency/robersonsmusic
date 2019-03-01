registerBlockType( 'childress/icon-grid', {
    title: 'Icon Grid',
    icon: 'screenoptions',
    category: 'custom-blocks',

    attributes: {

    },

    edit( { attributes, className, setAttributes } ) {
        return (
            <section className={ className + ' icon-grid' }>
                <InnerBlocks
                    allowedBlocks={['childress/icon-grid-icon']}
                    template={[
                        ['childress/icon-grid-icon'],
                        ['childress/icon-grid-icon'],
                        ['childress/icon-grid-icon'],
                        ['childress/icon-grid-icon'],
                    ]}
                />
            </section>
        );
    },

    save( { attributes } ) {
        return (
            <section className='icon-grid'>
                <InnerBlocks.Content />
            </section>
        );
    },
} );

registerBlockType( 'childress/icon-grid-icon', {
    title: 'Icon',
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
        link: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { imageUrl, imageAlt, imageId, title, link } = attributes;

        return (
            <div className={ className + ' icon-grid-icon' }>
                <MediaUpload
                    label='Image'
                    onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt, imageId: media.id } ) } }
                    type='image'
                    value={ imageUrl }
                    render={ ({ open }) => (
                        <Button className={ imageId ? 'image-button icon-grid-icon__img' : 'button button-large icon-grid-icon__img' } onClick={ open }>
                            { imageId ? <img src={ imageUrl } /> : 'Select Image' }
                        </Button>
                    ) }
                />
                <URLInputButton
                    url={ link }
                    onChange={ ( value ) => { setAttributes({ link: value }) } }
                />
                <h3 className='icon-grid-icon__title'>
                    <RichText
                        value={ title }
                        onChange={ ( value ) => { setAttributes({ title: value }) } }
                        placeholder='Title'
                    />
                </h3>
            </div>
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageAlt, imageId, title, link } = attributes;

        return (
            <a className='icon-grid-icon' href={ link }>
                <div className='icon-grid-icon__img'>
                    <img src={ imageUrl } alt={ imageAlt } className={ 'wp-image-' + imageId } />
                </div>
                <h3 className='icon-grid-icon__title'><RichText.Content value={ title } /></h3>
            </a>
        );
    },
} );

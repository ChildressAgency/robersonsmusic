registerBlockType( 'childress/post-template', {
    title: 'Post Template',
    icon: 'admin-post',
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
        heading: {
            type: 'string'
        },
        headingBgUrl: {
            type: 'string'
        },
        headingBgAlt: {
            type: 'string'
        },
        headingBgId: {
            type: 'number'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { imageUrl, imageAlt, imageId, heading, headingBgUrl, headingBgAlt, headingBgId } = attributes;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title='Post Options'>
                        <PlainText
                            value={ heading }
                            onChange={ ( value ) => { setAttributes({ heading: value }) } }
                        />
                        <hr />
                        <MediaUpload
                            label='Heading Background'
                            onSelect={ media => { setAttributes( { headingBgUrl: media.url, headingBgAlt: media.alt, headingBgId: media.id } ) } }
                            type='image'
                            value={ headingBgUrl }
                            render={ ({ open }) => (
                                <Button className={ headingBgUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                    { headingBgUrl ? <img src={ headingBgUrl } /> : 'Select Heading Background' }
                                </Button>
                            ) }
                        />
                    </PanelBody>
                </InspectorControls>
                <section className={ className }>
                    <MediaUpload
                        label='Image'
                        onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt, imageId: media.id } ) } }
                        type='image'
                        value={ imageUrl }
                        render={ ({ open }) => (
                            <Button className={ imageUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                { imageUrl ? <img src={ imageUrl } /> : 'Select Image' }
                            </Button>
                        ) }
                    />
                    <InnerBlocks
                        template={[
                            ['core/paragraph']
                        ]}
                        templateLock={ false }
                    />
                </section>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageAlt, imageId, heading, headingBgUrl, headingBgAlt, headingBgId } = attributes;

        return (
            <section>
                <InnerBlocks.Content />
            </section>
        );
    },
} );

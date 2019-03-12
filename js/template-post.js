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
    },

    edit( { attributes, className, setAttributes } ) {
        const { imageUrl, imageAlt, imageId } = attributes;

        return (
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
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageAlt, imageId } = attributes;

        return (
            <section>
                <InnerBlocks.Content />
            </section>
        );
    },
} );

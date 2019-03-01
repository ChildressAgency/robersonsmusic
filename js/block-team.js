registerBlockType( 'childress/team', {
    title: 'Team',
    icon: 'groups',
    category: 'custom-blocks',

    attributes: {
        title: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { title } = attributes;

        return (
            <section className={ className + ' team' }>
                <InnerBlocks
                    allowedBlocks={['childress/team-member', 'childress/team-member-desc']}
                    template={[
                        ['childress/team-member-desc']
                    ]}
                />
            </section>
        );
    },

    save( { attributes } ) {
        const { title } = attributes;

        return (
            <section className='team container'>
                <InnerBlocks.Content />
            </section>
        );
    },
} );

registerBlockType( 'childress/team-member', {
    title: 'Team Member',
    icon: 'businessman',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        name: {
            type: 'string'
        },
        position: {
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
        const { name, position, imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className='team-member'>
                <MediaUpload
                    label='Image'
                    onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt, imageId: media.id } ) } }
                    type='image'
                    value={ imageUrl }
                    render={ ({ open }) => (
                        <Button className={ imageId ? 'image-button' : 'button button-large' } onClick={ open }>
                            { imageId ? <img src={ imageUrl } /> : 'Select Image' }
                        </Button>
                    ) }
                />
                <h3>
                    <PlainText
                        value={ name }
                        onChange={ ( value ) => { setAttributes({ name: value }) } }
                        placeholder='Name'
                    />
                </h3>
                <h4>
                    <PlainText
                        value={ position }
                        onChange={ ( value ) => { setAttributes({ position: value }) } }
                        placeholder='Position'
                    />
                </h4>
            </div>
        );
    },

    save( { attributes } ) {
        const { name, position, imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className='team-member'>
                <img src={ imageUrl } alt={ imageAlt } className={ 'team-member__img wp-image-' + imageId } />
                <div className='team-member__info'>
                    <h3 className='team-member__name'>{ name }</h3>
                    <h4 className='team-member__position'>{ position }</h4>
                </div>
            </div>
        );
    },
} );

registerBlockType( 'childress/team-member-desc', {
    title: 'Team Member w/ Description',
    icon: 'businessman',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        name: {
            type: 'string'
        },
        position: {
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
        const { name, position, imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className='team-member team-member--has-desc'>
                <MediaUpload
                    label='Image'
                    onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt, imageId: media.id } ) } }
                    type='image'
                    value={ imageUrl }
                    render={ ({ open }) => (
                        <Button className={ imageId ? 'image-button' : 'button button-large' } onClick={ open }>
                            { imageId ? <img src={ imageUrl } /> : 'Select Image' }
                        </Button>
                    ) }
                />
                <div className='team-member__info'>
                    <h3>
                        <PlainText
                            value={ name }
                            onChange={ ( value ) => { setAttributes({ name: value }) } }
                            placeholder='Name'
                        />
                    </h3>
                    <h4>
                        <PlainText
                            value={ position }
                            onChange={ ( value ) => { setAttributes({ position: value }) } }
                            placeholder='Position'
                        />
                    </h4>
                    <InnerBlocks
                        allowedBlocks={['core/paragraph']}
                        template={[
                            ['core/paragraph']
                        ]}
                    />
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { name, position, imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className='team-member team-member--has-desc'>
                <img src={ imageUrl } alt={ imageAlt } className={ 'team-member__img wp-image-' + imageId } />
                <div className='team-member__info'>
                    <h3 className='team-member__name'>{ name }</h3>
                    <h4 className='team-member__position'>{ position }</h4>
                    <div className='team-member__desc'>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        );
    },
} );


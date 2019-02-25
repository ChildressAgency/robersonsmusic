registerBlockType( 'childress/services', {
    title: 'Services',
    icon: 'info',
    category: 'custom-blocks',

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
            <section className={ className + ' services' }>
                <div className='services__img'>
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
                </div>
                <div className='services__list'>
                    <InnerBlocks
                        allowedBlocks={['childress/services-service']}
                        template={[
                            ['childress/services-service']
                        ]}
                    />
                </div>
            </section>
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageAlt, imageId } = attributes;

        return (
            <section className='services container'>
                <div className='services__img'>
                    <img src={ imageUrl } alt={ imageAlt } className={ 'wp-image-' + imageId } />
                </div>
                <div className='services__list'>
                    <InnerBlocks.Content />
                </div>
            </section>
        );
    },
} );

registerBlockType( 'childress/services-service', {
    title: 'Service',
    icon: 'info',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        title: {
            type: 'string'
        },
        link: {
            type: 'string'
        },
        iconUrl: {
            type: 'string'
        },
        iconAlt: {
            type: 'string'
        },
        iconId: {
            type: 'number'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { title, link, iconUrl, iconAlt, iconId } = attributes;

        return (
            <div className={ className + ' service' }>
                <div className="service__img">
                    <URLInputButton
                        url={ link }
                        onChange={ ( value ) => { setAttributes({ link: value }) } }
                    />
                    <MediaUpload
                        label='Image'
                        onSelect={ media => { setAttributes( { iconUrl: media.url, iconAlt: media.alt, iconId: media.id } ) } }
                        type='image'
                        value={ iconUrl }
                        render={ ({ open }) => (
                            <Button className={ iconId ? 'image-button' : 'button button-large' } onClick={ open }>
                                { iconId ? <img src={ iconUrl } /> : 'Select Icon' }
                            </Button>
                        ) }
                    />
                </div>
                <div class="service__info">
                    <h3 className='service__title'>
                        <PlainText
                            value={ title }
                            onChange={ ( value ) => { setAttributes({ title: value }) } }
                            placeholder='Title'
                        />
                    </h3>
                    <p className='service__desc'>
                        <InnerBlocks
                            allowedBlocks={['core/paragraph']}
                            template={[
                                ['core/paragraph']
                            ]}
                        />
                    </p>
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { title, link, iconUrl, iconAlt, iconId } = attributes;

        return (
            <div className='service'>
                <div className="service__icon">
                    <img src={ iconUrl } alt={ iconAlt } className={ 'service__img wp-image-' + iconId } />
                </div>
                <div className="service__info">
                    <h3 className='service__title'>{ title }</h3>
                    <p className='service__desc'><InnerBlocks.Content /></p>
                    <a className='service__link' href={ link }>Learn More<span className='service__link-line'></span></a>
                </div>
            </div>
        );
    },
} );

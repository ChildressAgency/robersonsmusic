registerBlockType( 'childress/learn-more', {
    title: 'Learn More',
    icon: createElement('svg', 
        { 
            width: 433.5,
            height: 433.5,
            viewBox: '0 0 433.5 433.5'
        },
        createElement( 'path',
            {
                d: 'M153,382.5h127.5V51H153V382.5z M0,382.5h127.5V51H0V382.5z M306,51v331.5h127.5V51H306z'
            }
        )
    ),
    category: 'custom-blocks',

    edit( { attributes, className, setAttributes } ) {
        return (
            <section className={ className + ' learn-more' }>
                <InnerBlocks
                    allowedBlocks={['childress/learn-more-column']}
                    template={[
                        ['childress/learn-more-column'],
                        ['childress/learn-more-column'],
                        ['childress/learn-more-column']
                    ]}
                    templateLock='all'
                />
            </section>
        );
    },

    save( { attributes } ) {
        return (
            <section className='learn-more'>
                <InnerBlocks.Content />
            </section>
        );
    },
} );

registerBlockType( 'childress/learn-more-column', {
    title: 'Column',
    icon: createElement('svg', 
        { 
            width: 24,
            height: 24,
            viewBox: '0 0 24 24'
        },
        createElement( 'path',
            {
                d: 'M 9 2 C 7.9069372 2 7 2.9069372 7 4 L 7 20 C 7 21.093063 7.9069372 22 9 22 L 15 22 C 16.093063 22 17 21.093063 17 20 L 17 4 C 17 2.9069372 16.093063 2 15 2 L 9 2 z M 9 4 L 15 4 L 15 20 L 9 20 L 9 4 z'
            }
        )
    ),
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
        iconUrl: {
            type: 'string'
        },
        iconAlt: {
            type: 'string'
        },
        iconId: {
            type: 'number'
        },
        iconHoverUrl: {
            type: 'string'
        },
        iconHoverAlt: {
            type: 'string'
        },
        iconHoverId: {
            type: 'number'
        },
        link: {
            type: 'string'
        },
        title: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { imageUrl, imageAlt, imageId, iconUrl, iconAlt, iconId, iconHoverUrl, iconHoverAlt, iconHoverId, link, title } = attributes;

        return (
            <div className={ className + ' learn-more__column' }>
                <URLInputButton
                    url={ link }
                    onChange={ ( value ) => { setAttributes({ link: value }) } }
                />
                <div className='learn-more__title-box'>
                    <div className='learn-more__icon'>
                        <MediaUpload
                            label='Icon'
                            onSelect={ media => { setAttributes( { iconHoverUrl: media.url, iconHoverAlt: media.alt, iconHoverId: media.id } ) } }
                            type='image'
                            value={ iconHoverUrl }
                            render={ ({ open }) => (
                                <Button className={ iconHoverUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                    { iconHoverUrl ? <img src={ iconHoverUrl } /> : 'Select Hover Icon' }
                                </Button>
                            ) }
                        />
                        <MediaUpload
                            label='Hover Icon'
                            onSelect={ media => { setAttributes( { iconUrl: media.url, iconAlt: media.alt, iconId: media.id } ) } }
                            type='image'
                            value={ iconUrl }
                            render={ ({ open }) => (
                                <Button className={ iconUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                    { iconUrl ? <img src={ iconUrl } /> : 'Select Icon' }
                                </Button>
                            ) }
                        />
                    </div>
                    <h2 className='learn-more__title'>
                        <PlainText
                            value={ title }
                            onChange={ ( value ) => { setAttributes({ title: value }) } }
                            placeholder='Title'
                        />
                    </h2>
                </div>
                <div className='learn-more__img'>
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
                </div>
                <div className='learn-more__text'>
                    <InnerBlocks
                        templateLock={ false }
                    />
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageAlt, imageId, iconUrl, iconAlt, iconId, iconHoverUrl, iconHoverAlt, iconHoverId, link, title } = attributes;

        return (
            <a className='learn-more__column' href={ link }>
                <div className='learn-more__title-box'>
                    <div className='learn-more__icon'>
                        <img src={ iconHoverUrl } alt={ iconHoverAlt } className={ 'learn-more__icon--hover wp-image-' + iconHoverId } />
                        <img src={ iconUrl } alt={ iconAlt } className={ 'learn-more__icon--base wp-image-' + iconId } />
                    </div>
                    <h2 className='learn-more__title'>{ title }</h2>
                </div>
                <div className='learn-more__img'>
                    <img src={ imageUrl } alt={ imageAlt } className={ 'wp-image-' + imageId } />
                </div>
                <div className='learn-more__text'>
                    <InnerBlocks.Content />
                </div>
            </a>
        );
    },
} );

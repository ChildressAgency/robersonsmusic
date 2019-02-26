registerBlockType( 'childress/reviews', {
    title: 'Reviews',
    icon: createElement('svg', 
        { 
            width: 512,
            height: 512,
            viewBox: '0 0 512 512'
        },
        createElement( 'path',
            {
                d: 'M84.693,132.4c8.28,0,14.993-6.716,14.993-15v-12.554c0-8.284-6.713-15-14.993-15s-14.993,6.716-14.993,15V117.4   C69.699,125.684,76.412,132.4,84.693,132.4z'
            }
        ),
        createElement( 'path',
            {
                d: 'M114.679,250c63.234,0,114.679-51.468,114.679-114.73c0-63.262-51.445-114.73-114.679-114.73   C51.445,20.54,0,72.007,0,135.27C0,198.532,51.445,250,114.679,250z M114.679,50.54c46.699,0,84.692,38.01,84.692,84.73   c0,46.721-37.993,84.73-84.692,84.73c-46.7,0-84.693-38.01-84.693-84.73C29.987,88.549,67.979,50.54,114.679,50.54z'
            }
        ),
        createElement( 'path',
            {
                d: 'M144.666,132.4c8.28,0,14.993-6.716,14.993-15v-12.554c0-8.284-6.713-15-14.993-15c-8.28,0-14.993,6.716-14.993,15V117.4   C129.672,125.684,136.385,132.4,144.666,132.4z'
            }
        ),
        createElement( 'path',
            {
                d: 'M74.091,156.708c-5.855,5.858-5.855,15.355,0,21.213c11.191,11.197,25.887,16.793,40.588,16.793   c14.697,0,29.399-5.599,40.588-16.792c5.855-5.858,5.855-15.355,0-21.213c-5.855-5.858-15.349-5.857-21.204,0   c-10.69,10.694-28.081,10.693-38.77,0C89.439,150.85,79.946,150.85,74.091,156.708z'
            }
        ),
        createElement( 'path',
            {
                d: 'M264.554,100.371h232.452c8.28,0,14.993-6.716,14.993-15s-6.713-15-14.993-15H264.554c-8.28,0-14.993,6.716-14.993,15   S256.274,100.371,264.554,100.371z'
            }
        ),
        createElement( 'path',
            {
                d: 'M497.007,120.371H264.554c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h232.452c8.28,0,14.993-6.716,14.993-15   S505.287,120.371,497.007,120.371z'
            }
        ),
        createElement( 'path',
            {
                d: 'M474.669,185.168c0-8.284-6.713-15-14.993-15H264.554c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h195.122   C467.956,200.168,474.669,193.452,474.669,185.168z'
            }
        ),
        createElement( 'path',
            {
                d: 'M367.334,373.86c8.28,0,14.993-6.716,14.993-15v-12.553c0-8.284-6.713-15-14.993-15c-8.28,0-14.993,6.716-14.993,15v12.553   C352.341,367.145,359.054,373.86,367.334,373.86z'
            }
        ),
        createElement( 'path',
            {
                d: 'M397.321,262c-63.234,0-114.679,51.468-114.679,114.73c0,63.262,51.444,114.73,114.679,114.73S512,439.993,512,376.73   C512,313.468,460.555,262,397.321,262z M397.321,461.46c-46.7,0-84.693-38.01-84.693-84.73c0-46.721,37.993-84.73,84.693-84.73   s84.693,38.01,84.693,84.73C482.013,423.451,444.021,461.46,397.321,461.46z'
            }
        ),
        createElement( 'path',
            {
                d: 'M427.307,373.86c8.28,0,14.993-6.716,14.993-15v-12.553c0-8.284-6.713-15-14.993-15s-14.993,6.716-14.993,15v12.553   C412.314,367.145,419.027,373.86,427.307,373.86z'
            }
        ),
        createElement( 'path',
            {
                d: 'M397.321,393.775c-15.332,0-29.747,5.973-40.588,16.82c-5.856,5.858-5.856,15.355,0,21.213   c5.855,5.858,15.349,5.858,21.203,0c10.689-10.693,28.081-10.693,38.77,0c2.927,2.929,6.765,4.394,10.602,4.394   s7.674-1.464,10.602-4.394c5.856-5.858,5.856-15.355,0-21.213C427.068,399.749,412.653,393.775,397.321,393.775z'
            }
        ),
        createElement( 'path',
            {
                d: 'M247.562,411.629H14.993c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h232.569c8.28,0,14.993-6.716,14.993-15   S255.842,411.629,247.562,411.629z'
            }
        ),
        createElement( 'path',
            {
                d: 'M247.562,361.629H14.993c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h232.569c8.28,0,14.993-6.716,14.993-15   S255.842,361.629,247.562,361.629z'
            }
        ),
        createElement( 'path',
            {
                d: 'M247.562,311.832H52.324c-8.28,0-14.993,6.716-14.993,15s6.713,15,14.993,15h195.238c8.28,0,14.993-6.716,14.993-15   S255.842,311.832,247.562,311.832z'
            }
        ),
    ),
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
        celloUrl: {
            type: 'string'
        },
        celloAlt: {
            type: 'string'
        },
        celloId: {
            type: 'number'
        },
        title: {
            type: 'string'
        },
        subtitle: {
            type: 'string'
        },
        includeHeader: {
            type: 'boolean',
            default: true
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { imageUrl, imageAlt, imageId, celloUrl, celloAlt, celloId, title, subtitle } = attributes;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title="Block Options">
                        <ToggleControl
                            label="Heading emphasis"
                            help={ headingEmphasisTop ? 'Emphasis top' : 'Emphasis bottom' }
                            checked={ headingEmphasisTop }
                            onChange={ ( value ) => { setAttributes({ headingEmphasisTop: value }) } }
                        />
                    </PanelBody>
                </InspectorControls>
                <section className={ className }>
                    <div className='reviews-hero'>
                        <MediaUpload
                            label='Image'
                            onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt, imageId: media.id } ) } }
                            type='image'
                            value={ imageUrl }
                            render={ ({ open }) => (
                                <Button className={ 'button button-large' } onClick={ open }>
                                    { 'Select Background Image' }
                                </Button>
                            ) }
                        />
                        <img src={ imageUrl } alt={ imageAlt } className={ 'reviews-hero__img wp-image-' + imageId } />
                        <h2 className='reviews-hero__title'>
                            <PlainText
                                value={ title }
                                onChange={ ( value ) => { setAttributes({ title: value }) } }
                                placeholder='Title'
                            />
                        </h2>
                    </div>
                    <div className='reviews'>
                        <MediaUpload
                            label='Cello'
                            onSelect={ media => { setAttributes( { celloUrl: media.url, celloAlt: media.alt, celloId: media.id } ) } }
                            type='image'
                            value={ celloUrl }
                            render={ ({ open }) => (
                                <Button className={ celloUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                    { celloUrl ? <img src={ celloUrl } /> : 'Select Cello' }
                                </Button>
                            ) }
                        />
                        <div className='container'>
                            <h3 className='reviews__title'>
                                <PlainText
                                    value={ subtitle }
                                    onChange={ ( value ) => { setAttributes({ subtitle: value }) } }
                                    placeholder='Subtitle'
                                />
                            </h3>
                            <div className='reviews__slides'>
                                <InnerBlocks
                                    allowedBlocks={['childress/reviews-review']}
                                    template={[
                                        ['childress/reviews-review']
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageAlt, imageId, celloUrl, celloAlt, celloId, title, subtitle } = attributes;

        return (
            <section>
                <div className='reviews-hero'>
                    <img src={ imageUrl } alt={ imageAlt } className={ 'reviews-hero__img wp-image-' + imageId } />
                    <h2 className='reviews-hero__title'>{ title }</h2>
                </div>
                <div className='reviews'>
                    <img src={ celloUrl } alt={ celloAlt } className={ 'reviews__cello' } />
                    <div className='container'>
                        <h3 className='reviews__title'>{ subtitle }</h3>
                        <div className='reviews__slides'>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            </section>
        );
    },
} );

registerBlockType( 'childress/reviews-review', {
    title: 'Review',
    icon: createElement('svg', 
        { 
            width: 512,
            height: 512,
            viewBox: '0 0 512 512'
        },
        createElement( 'path',
            {
                d: 'M355.761,199.693c-18.37,0-36.008,3.186-52.394,9.032c5.896-16.435,9.11-34.135,9.11-52.572   C312.478,70.05,242.39,0,156.239,0S0,70.05,0,156.153s70.089,156.153,156.239,156.153c18.37,0,36.008-3.186,52.394-9.032   c-5.896,16.435-9.11,34.135-9.11,52.572C199.522,441.95,269.61,512,355.761,512S512,441.95,512,355.847   S441.911,199.693,355.761,199.693z M30,156.153C30,86.592,86.631,30,156.239,30s126.238,56.592,126.238,126.153   s-56.63,126.153-126.238,126.153S30,225.714,30,156.153z M355.761,482c-69.608,0-126.238-56.592-126.238-126.153   s56.63-126.153,126.238-126.153S482,286.286,482,355.847S425.369,482,355.761,482z'
            }
        ),
        createElement( 'path',
            {
                d: 'M307.813,341.267c8.284,0,15-6.716,15-15v-23.959c0-8.284-6.716-15-15-15s-15,6.716-15,15v23.959   C292.813,334.551,299.528,341.267,307.813,341.267z'
            }
        ),
        createElement( 'path',
            {
                d: 'M403.709,287.307c-8.284,0-15,6.716-15,15v23.959c0,8.284,6.716,15,15,15s15-6.716,15-15v-23.959   C418.709,294.023,411.993,287.307,403.709,287.307z'
            }
        ),
        createElement( 'path',
            {
                d: 'M403.709,371.027c-8.284,0-15,6.716-15,15c0,9.894-8.059,17.943-17.963,17.943h-29.97c-9.905,0-17.964-8.049-17.964-17.943   c0-8.284-6.716-15-15-15s-15,6.716-15,15c0,26.436,21.517,47.943,47.964,47.943h29.97c26.447,0,47.963-21.507,47.963-47.943   C418.709,377.743,411.993,371.027,403.709,371.027z'
            }
        ),
        createElement( 'path',
            {
                d: 'M108.291,141.573c8.284,0,15-6.716,15-15v-23.959c0-8.284-6.716-15-15-15s-15,6.716-15,15v23.959   C93.291,134.857,100.007,141.573,108.291,141.573z'
            }
        ),
        createElement( 'path',
            {
                d: 'M204.188,87.614c-8.284,0-15,6.716-15,15v23.959c0,8.284,6.716,15,15,15s15-6.716,15-15v-23.959   C219.188,94.33,212.472,87.614,204.188,87.614z'
            }
        ),
        createElement( 'path',
            {
                d: 'M171.224,171.333h-29.97c-26.447,0-47.963,21.507-47.963,47.943c0,8.284,6.716,15,15,15s15-6.716,15-15   c0-9.894,8.059-17.943,17.963-17.943h29.97c9.905,0,17.964,8.049,17.964,17.943c0,8.284,6.716,15,15,15s15-6.716,15-15   C219.188,192.841,197.671,171.333,171.224,171.333z'
            }
        ),
    ),
    category: 'custom-blocks',
    parent: false,

    attributes: {
        text: {
            type: 'string'
        },
        name: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { text, name } = attributes;

        return (
            <div className='review'>
                <p className='review__text'>
                    <PlainText
                        value={ text }
                        onChange={ ( value ) => { setAttributes({ text: value }) } }
                        placeholder='Text'
                    />
                </p>
                <p className='review__name'>
                    <PlainText
                        value={ name }
                        onChange={ ( value ) => { setAttributes({ name: value }) } }
                        placeholder='Name'
                    />
                </p>
            </div>
        );
    },

    save( { attributes } ) {
        const { text, name } = attributes;

        return (
            <div className='review'>
                <p className='review__text'>{ text }</p>
                <p className='review__name'>&#8212; { name }</p>
            </div>
        );
    },
} );


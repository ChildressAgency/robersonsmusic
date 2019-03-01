registerBlockType( 'childress/image-text', {
    title: 'Image & Text',
    icon: createElement('svg', 
        { 
            width: 24,
            height: 24,
            viewBox: '0 0 24 24'
        },
        createElement( 'path',
            {
                d: 'M13 17h8v-2h-8v2zM3 19h8V5H3v14zM13 9h8V7h-8v2zm0 4h8v-2h-8v2z'
            }
        )
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
        heading: {
            type: 'string'
        },
        backgroundColor: {
            type: 'string',
            default: '#1c60c6'
        },
        classes: {
            type: 'string',
            default: ''
        },
        headingEmphasisTop: {
            type: 'boolean',
            default: true
        },
        includeBonusText: {
            type: 'boolean',
            default: false
        },
        bonusText: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { imageUrl, imageAlt, imageId, heading, backgroundColor, classes, headingEmphasisTop, includeBonusText, bonusText } = attributes;

        function setBackgroundColor( ...args ){
            setAttributes({ backgroundColor: args[0] });
        }

        return (
            <Fragment>
                <InspectorControls>
                    <PanelColorSettings
                        title="Color Settings"
                        colorSettings={[
                            {
                                value: backgroundColor,
                                onChange: setBackgroundColor,
                                label: 'Background Color'
                            }
                        ]}
                    />
                    <PanelBody>
                        <SelectControl
                            label="Variant"
                            value={ classes ? classes : '' }
                            options={[
                                {
                                    label: 'Default',
                                    value: ''
                                },
                                {
                                    label: 'Small',
                                    value: 'image-text--small'
                                },
                            ]}
                            onChange={ ( value ) => setAttributes({ classes: value }) }
                        />
                        {
                            classes == '' && 
                            <ToggleControl
                                label="Heading emphasis"
                                help={ headingEmphasisTop ? 'Emphasis top' : 'Emphasis bottom' }
                                checked={ headingEmphasisTop }
                                onChange={ ( value ) => { setAttributes({ headingEmphasisTop: value }) } }
                            />
                        }
                        {
                            classes == 'image-text--small' &&
                            <ToggleControl
                                label="Bonus Text"
                                help={ includeBonusText ? 'Include bonus text' : 'DO NOT include bonus text' }
                                checked={ includeBonusText }
                                onChange={ ( value ) => { setAttributes({ includeBonusText: value }) } }
                            />
                        }
                    </PanelBody>
                </InspectorControls>
                <section className={ className + ' image-text container ' + classes + ( classes == '' ? ( headingEmphasisTop ? ' image-text--heading-em-top' : ' image-text--heading-em-bottom' ) : '' ) }>
                    <h2>
                        <RichText
                            value={ heading }
                            onChange={ ( value ) => { setAttributes({ heading: value }) } }
                            placeholder='Heading'
                        />
                    </h2>
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
                    />
                    {
                        classes == 'image-text--small' && includeBonusText &&
                        <p className='image-text__bonus'>
                            <PlainText
                                value={ bonusText }
                                onChange={ ( value ) => { setAttributes({ bonusText: value }) } }
                                placeholder='Bonus Text'
                            />
                        </p>
                    }
                </section>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageAlt, imageId, heading, backgroundColor, classes, headingEmphasisTop, includeBonusText, bonusText } = attributes;

        var isSmall = classes == 'image-text--small';
        var isBonus = isSmall && includeBonusText;

        return (
            <section className={ 'image-text container ' + classes + ( classes == '' ? ( headingEmphasisTop ? ' image-text--heading-em-top' : ' image-text--heading-em-bottom' ) : '' ) }>
                { 
                    classes == '' &&
                    <div className='image-text__heading'>
                        <h2><RichText.Content value={ heading }/></h2>
                    </div>
                }
                <div className='image-text__inner'>
                    <div className="image-text__img">
                        <div className='image-text__background' style={{ backgroundColor: backgroundColor }}></div>
                        <img src={ imageUrl } alt={ imageAlt } className={ 'wp-image-' + imageId } />
                    </div>
                    <div className='image-text__text'>
                        {
                            classes == 'image-text--small' &&
                            <div className='image-text__heading'>
                                <h2><RichText.Content value={ heading }/></h2>
                            </div>
                        }
                        <InnerBlocks.Content />
                    </div>
                </div>
                {
                    isBonus &&
                    <p className='image-text__bonus'>{ bonusText }</p>
                }
            </section>
        );
    },
} );

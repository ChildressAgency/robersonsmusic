registerBlockType( 'childress/section-heading', {
    title: 'Section Heading',
    icon: createElement('svg', 
        { 
            width: 24,
            height: 24,
            viewBox: '0 0 24 24'
        },
        createElement( 'path',
            {
                d: 'M5 4v3h5.5v12h3V7H19V4z'
            }
        )
    ),
    category: 'custom-blocks',

    attributes: {
        text: {
            type: 'string'
        },
        hasEmphasis: {
            type: 'boolean',
            default: false
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { text, hasEmphasis } = attributes;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <ToggleControl
                            label='Emphasis'
                            help={ hasEmphasis ? 'Emphasize on top line' : 'DO NOT emphasize top line' }
                            checked={ hasEmphasis }
                            onChange={ ( value ) => { setAttributes({ hasEmphasis: value }) } }
                        />
                    </PanelBody>
                </InspectorControls>
                <h2 className={ className + ' ' + ( hasEmphasis ? 'section-heading--emphasis' : '' ) }>
                    <RichText
                        value={ text }
                        onChange={ ( value ) => { setAttributes({ text: value }) } }
                        placeholder='Heading'
                    />
                </h2>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { text, hasEmphasis } = attributes;

        return (
            <h2 className={ ( hasEmphasis ? 'section-heading--emphasis' : '' ) }>
                <RichText.Content value={ text } />
            </h2>
        );
    },
} );

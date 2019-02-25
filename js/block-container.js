registerBlockType( 'childress/container', {
    title: 'Container',
    icon: 'editor-contract',
    category: 'layout',

    attributes: {
        classes: {
            type: 'string',
            default: 'container'
        },
        backgroundColor: {
            type: 'string',
            default: 'transparent'
        },
        textColor: {
            type: 'string',
            default: '#000'
        },
        includePadding: {
            type: 'boolean',
            default: true
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { classes, backgroundColor, textColor, includePadding } = attributes;

        function setBackgroundColor( ...args ){
            setAttributes({ backgroundColor: args[0] });
        }

        function setTextColor( ...args ){
            setAttributes({ textColor: args[0] });
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
                            },
                            {
                                value: textColor,
                                onChange: setTextColor,
                                label: 'Text Color'
                            }
                        ]}
                    />
                    <PanelBody
                        title="Container Options">
                        <SelectControl
                            label="Container Width"
                            value={ classes ? classes : '' }
                            options={[
                                {
                                    label: 'Default',
                                    value: 'container'
                                },
                                {
                                    label: 'Thin',
                                    value: 'container container--thin'
                                },
                                {
                                    label: 'Fluid',
                                    value: 'container container--fluid'
                                },
                            ]}
                            onChange={ ( value ) => setAttributes({ classes: value }) }
                        />
                        <ToggleControl
                            label="Side Padding"
                            help={ includePadding ? 'Include Side Padding' : 'Do Not Include Side Padding' }
                            checked={ includePadding }
                            onChange={ ( value ) => { setAttributes({ includePadding: value }) } }
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={ className + ' container-wrapper' } style={{ backgroundColor: backgroundColor, color: textColor }}>
                    <div className={ classes }>
                        <InnerBlocks />
                    </div>
                </div>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { classes, backgroundColor, textColor, includePadding } = attributes;

        return (
            <div className={ 'wp-block-childress-container container-wrapper' } style={{ backgroundColor: backgroundColor, color: textColor }}>
                <div className={ classes + ( includePadding ? '' : ' container--no-padding' )}>
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    },
} );
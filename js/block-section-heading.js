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
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { text } = attributes;

        return (
            <div className={ className }>
                <InnerBlocks
                    template={[
                        ['core/heading']
                    ]}
                    templateLock='all'
                />
            </div>
        );
    },

    save( { attributes } ) {
        const { text } = attributes;

        return (
            <div>
                <InnerBlocks.Content />
            </div>
        );
    },
} );

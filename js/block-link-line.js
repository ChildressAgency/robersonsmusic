registerBlockType( 'childress/link-line', {
    title: 'Link w/ Line',
    icon: 'admin-links',
    category: 'custom-blocks',

    attributes: {
        text: {
            type: 'string'
        },
        link: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { text, link } = attributes;

        return (
            <div className={ className + ' link-line' }>
                <URLInputButton
                    url={ link }
                    onChange={ ( value ) => { setAttributes({ link: value }) } }
                />
                <p>
                    <PlainText
                        value={ text }
                        onChange={ ( value ) => { setAttributes({ text: value }) } }
                        placeholder='Text'
                    />
                </p>
            </div>
        );
    },

    save( { attributes } ) {
        const { text, link } = attributes;

        return (
            <div className='link-line'>
                <a className='link-line__link' href={ link }>{ text }</a>
            </div>
        );
    },
} );

registerBlockType( 'childress/checklist', {
    title: 'Checklist',
    icon: createElement('svg', 
        { 
            width: 481.6,
            height: 481.6,
            viewBox: '0 0 481.6 481.6'
        },
        createElement( 'path',
            {
                d: 'M480.4,34.4H164.1c-0.6,0-1.2,0.5-1.2,1.2v28.2c0,0.6,0.5,1.2,1.2,1.2h316.3c0.6,0,1.2-0.5,1.2-1.2V35.6 C481.6,34.9,481.1,34.4,480.4,34.4z'
            }
        ),
        createElement( 'path',
            {
                d: 'M164.1,116h157.5c0.6,0,1.2-0.5,1.2-1.2V86.6c0-0.6-0.5-1.2-1.2-1.2H164.1c-0.6,0-1.2,0.5-1.2,1.2v28.2 C162.9,115.5,163.4,116,164.1,116z'
            }
        ),
        createElement( 'path',
            {
                d: 'M480.4,200H164.1c-0.6,0-1.2,0.5-1.2,1.2v28.2c0,0.6,0.5,1.2,1.2,1.2h316.3c0.6,0,1.2-0.5,1.2-1.2v-28.2 C481.6,200.5,481.1,200,480.4,200z'
            }
        ),
        createElement( 'path',
            {
                d: 'M164.1,281.6h157.5c0.6,0,1.2-0.5,1.2-1.2v-28.2c0-0.6-0.5-1.2-1.2-1.2H164.1c-0.6,0-1.2,0.5-1.2,1.2v28.2 C162.9,281.1,163.4,281.6,164.1,281.6z'
            }
        ),
        createElement( 'path',
            {
                d: 'M480.4,365.6H164.1c-0.6,0-1.2,0.5-1.2,1.2V395c0,0.6,0.5,1.2,1.2,1.2h316.3c0.6,0,1.2-0.5,1.2-1.2v-28.2 C481.6,366.1,481.1,365.6,480.4,365.6z'
            }
        ),
        createElement( 'path',
            {
                d: 'M321.6,416.7H164.1c-0.6,0-1.2,0.5-1.2,1.2v28.2c0,0.6,0.5,1.2,1.2,1.2h157.5c0.6,0,1.2-0.5,1.2-1.2v-28.2 C322.7,417.2,322.2,416.7,321.6,416.7z'
            }
        ),
        createElement( 'polygon',
            {
                points: '51.9,79 26.5,53.4 0,79.8 25.4,105.3 51.8,131.8 78.3,105.5 138.9,45.1 112.6,18.6'
            }
        ),
        createElement( 'polygon',
            {
                points: '51.9,244.6 26.5,219 0,245.4 25.4,270.9 51.8,297.4 78.3,271.1 138.9,210.7 112.6,184.2'
            }
        ),
        createElement( 'polygon',
            {
                points: '51.9,410.2 26.5,384.6 0,411 25.4,436.5 51.8,463 78.3,436.6 138.9,376.3 112.6,349.8'
            }
        ),
    ),
    category: 'custom-blocks',

    attributes: {
        title: {
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
        const { title, iconUrl, iconAlt, iconId } = attributes;

        return (
            <section className={ className + ' checklist' }>
                <MediaUpload
                    label='Icon'
                    onSelect={ media => { setAttributes( { iconUrl: media.url, iconAlt: media.alt, iconId: media.id } ) } }
                    type='image'
                    value={ iconUrl }
                    render={ ({ open }) => (
                        <Button className={ iconUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                            { iconUrl ? <img src={ iconUrl } /> : 'Select Icon' }
                        </Button>
                    ) }
                />
                <h2 className='checklist__title'>
                    <PlainText
                        value={ title }
                        onChange={ ( value ) => { setAttributes({ title: value }) } }
                        placeholder='Title'
                    />
                </h2>
                <div className='checklist__list'>
                    <InnerBlocks
                        allowedBlocks={['childress/checklist-item']}
                        template={[
                            ['childress/checklist-item'],
                        ]}
                    />
                </div>
            </section>
        );
    },

    save( { attributes } ) {
        const { title, iconUrl, iconAlt, iconId } = attributes;

        return (
            <section className='checklist'>
                <img src={ iconUrl } alt={ iconAlt } className={ 'checklist__icon wp-image-' + iconId } />
                <div className='container'>
                    <h2 className='checklist__title'>{ title }</h2>
                    <ul className='checklist__list'>
                        <InnerBlocks.Content />
                    </ul>
                </div>
            </section>
        );
    },
} );

registerBlockType( 'childress/checklist-item', {
    title: 'Checklist Item',
    icon: 'yes',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        text: {
            type: 'string'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { text } = attributes;

        return (
            <li className={ className + ' checklist__item' }>
                <PlainText
                    value={ text }
                    onChange={ ( value ) => { setAttributes({ text: value }) } }
                    placeholder='Text'
                />
            </li>
        );
    },

    save( { attributes } ) {
        const { text } = attributes;

        return (
            <li className='checklist__item'>{ text }</li>
        );
    },
} );

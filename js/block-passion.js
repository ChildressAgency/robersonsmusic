registerBlockType( 'childress/passion', {
    title: 'Passion',
    icon: createElement('svg', 
        { 
            width: 512,
            height: 512,
            viewBox: '-80 0 512 512'
        },
        createElement( 'path',
            {
                d: 'M 299.882812 212.117188 C 249.160156 161.394531 232.207031 87.738281 255.636719 19.894531 C 257.222656 15.3125 256.488281 10.246094 253.675781 6.292969 C 250.859375 2.34375 246.308594 0 241.460938 0 L 239.933594 0 C 178.507812 0 128.535156 49.972656 128.535156 111.398438 L 128.535156 207.792969 C 128.535156 217.238281 120.847656 224.925781 111.402344 224.925781 C 101.953125 224.925781 94.269531 217.238281 94.269531 207.792969 C 94.269531 202.109375 91.054688 196.914062 85.972656 194.375 C 80.886719 191.835938 74.804688 192.386719 70.257812 195.800781 C 48.925781 211.824219 31.25 232.820312 19.140625 256.519531 C 6.441406 281.382812 0 308.234375 0 336.335938 C 0 433.195312 78.804688 512 175.664062 512 C 272.527344 512 351.335938 433.195312 351.335938 336.332031 C 351.335938 289.410156 333.058594 245.296875 299.882812 212.117188 Z M 267.042969 449.683594 C 242.035156 469.882812 210.238281 482 175.664062 482 C 141.039062 482 109.203125 469.847656 84.179688 449.597656 C 79.78125 438.34375 77.480469 426.257812 77.480469 413.8125 C 77.480469 387.585938 87.691406 362.929688 106.238281 344.386719 L 165.0625 285.5625 C 167.875 282.746094 171.691406 281.167969 175.667969 281.167969 C 179.648438 281.167969 183.460938 282.746094 186.273438 285.5625 L 245.097656 344.386719 C 273.515625 372.804688 280.816406 414.445312 267.042969 449.683594 Z M 267.042969 449.683594'
            }
        )
    ),
    category: 'custom-blocks',

    attributes: {
        mixBlendBig: {
            type: 'string'
        },
        mixBlendSmall: {
            type: 'string'
        },
        trebleText: {
            type: 'string'
        },
        mixBlendUrl: {
            type: 'string'
        },
        mixBlendAlt: {
            type: 'string'
        },
        mixBlendId: {
            type: 'number'
        },
        trebleUrl: {
            type: 'string'
        },
        trebleAlt: {
            type: 'string'
        },
        trebleId: {
            type: 'number'
        },
        trebleImgUrl: {
            type: 'string'
        },
        trebleImgAlt: {
            type: 'string'
        },
        trebleImgId: {
            type: 'number'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { mixBlendBig, mixBlendSmall, trebleText, mixBlendUrl, mixBlendAlt, mixBlendId, trebleUrl, trebleAlt, trebleId, trebleImgUrl, trebleImgAlt, trebleImgId } = attributes;

        return (
            <section className={ className + ' passion' }>
                <div className='mix-blend'>
                    <MediaUpload
                        label='Mix Blend Background'
                        onSelect={ media => { setAttributes( { mixBlendUrl: media.url, mixBlendAlt: media.alt, mixBlendId: media.id } ) } }
                        type='image'
                        value={ mixBlendUrl }
                        render={ ({ open }) => (
                            <Button className={ 'button button-large' } onClick={ open }>
                                { 'Select Background' }
                            </Button>
                        ) }
                    />
                    <img src={ mixBlendUrl } alt={ mixBlendAlt } className={ 'mix-blend__background wp-image-' + mixBlendId } />
                    <h2 className='mix-blend__text'>
                        <span className='mix-blend__text--big'>
                            <PlainText
                                value={ mixBlendBig }
                                onChange={ ( value ) => { setAttributes({ mixBlendBig: value }) } }
                                placeholder='Big Text'
                            />
                        </span>
                        <br />
                        <PlainText
                            value={ mixBlendSmall }
                            onChange={ ( value ) => { setAttributes({ mixBlendSmall: value }) } }
                            placeholder='Small Text'
                        />
                    </h2>
                </div>
                <MediaUpload
                    label='Treble Background'
                    onSelect={ media => { setAttributes( { trebleImgUrl: media.url, trebleImgAlt: media.alt, trebleImgId: media.id } ) } }
                    type='image'
                    value={ trebleImgUrl }
                    render={ ({ open }) => (
                        <Button className={ 'button button-large' } onClick={ open }>
                            { 'Select Treble Background' }
                        </Button>
                    ) }
                />
                <div className='treble'>
                    <MediaUpload
                        label='Treble'
                        onSelect={ media => { setAttributes( { trebleUrl: media.url, trebleAlt: media.alt, trebleId: media.id } ) } }
                        type='image'
                        value={ trebleUrl }
                        render={ ({ open }) => (
                            <Button className={ trebleUrl ? 'image-button' : 'button button-large' } onClick={ open }>
                                { trebleUrl ? <img src={ trebleUrl } /> : 'Select Treble Cleft' }
                            </Button>
                        ) }
                    />
                    <div className='treble__gradient'>
                        <img src={ trebleImgUrl } alt={ trebleImgAlt } className={ 'treble__cleft-img wp-image-' + trebleImgId } />
                    </div>
                    <h3 className='treble__text'>
                        <PlainText
                            value={ trebleText }
                            onChange={ ( value ) => { setAttributes({ trebleText: value }) } }
                            placeholder='Treble Text'
                        />
                    </h3>
                </div>
                <div className='container'>
                    <div className='passion__text'>
                        <InnerBlocks />
                    </div>
                </div>
            </section>
        );
    },

    save( { attributes } ) {
        const { mixBlendBig, mixBlendSmall, trebleText, mixBlendUrl, mixBlendAlt, mixBlendId, trebleUrl, trebleAlt, trebleId, trebleImgUrl, trebleImgAlt, trebleImgId } = attributes;

        return (
            <section className='passion'>
                <div className='mix-blend'>
                    <img src={ mixBlendUrl } alt={ mixBlendAlt } className={ 'mix-blend__background wp-image-' + mixBlendId } />
                    <h2 className='mix-blend__text'><span className='mix-blend__text--big'>{ mixBlendBig }</span><br />{ mixBlendSmall }</h2>
                </div>
                <div className='treble'>
                    <img src={ trebleUrl } alt={ trebleAlt } className={ 'treble__cleft wp-image-' + trebleId } />
                    <div className='treble__gradient'>
                        <img src={ trebleImgUrl } alt={ trebleImgAlt } className={ 'treble__cleft-img wp-image-' + trebleImgId } />
                    </div>
                    <h3 className='treble__text'>{ trebleText }</h3>
                </div>
                <div className='container'>
                    <div className='passion__text'>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </section>
        );
    },
} );

registerBlockType( 'childress/instruments', {
    title: 'Instruments',
    icon: createElement('svg', 
        { 
            width: 512,
            height: 512,
            viewBox: '0 0 512 512'
        },
        createElement( 'path',
            {
                d: 'M127.659,241H126.4v-49.015l1.782-1.604c39.71-35.733,62.485-86.869,62.485-140.294v-2.954   C190.667,21.144,169.522,0,143.533,0C117.246,0,96.4,21.335,96.4,47.133v131.491l-59.999,54.002C13.268,253.443,0,283.233,0,314.37   c0,54.2,42.814,98.588,96.4,101.116v41.347C96.4,470.71,85.11,482,71.233,482s-25.167-11.29-25.167-25.167V448.8   c0-8.284-6.716-15-15-15s-15,6.716-15,15v8.034c0,30.419,24.748,55.167,55.167,55.167s55.167-24.748,55.167-55.167v-41.465   c44.847-3.271,80.333-40.806,80.333-86.474v-8.821C206.733,276.472,171.261,241,127.659,241z M126.4,47.133   c0-9.476,7.675-17.133,17.133-17.133c9.447,0,17.133,7.686,17.133,17.133v2.954c0,35.949-12.261,70.665-34.267,98.501V47.133z    M96.4,385.438C59.367,382.947,30,352.023,30,314.356c0-22.631,9.647-44.292,26.468-59.43l39.932-35.94V385.438z M176.733,328.895   c0,29.113-22.055,53.172-50.333,56.35V271h1.259c27.06,0,49.074,22.014,49.074,49.074V328.895z'
            }
        ),
        createElement( 'path',
            {
                d: 'M303.133,223.867V121.555l70.904-28.362c5.695-2.278,9.429-7.793,9.429-13.927V15c0-4.978-2.469-9.63-6.59-12.421   c-4.123-2.791-9.36-3.354-13.98-1.506l-80.333,32.133c-5.695,2.278-9.429,7.793-9.429,13.927v132.838   c-5.315-2.082-11.09-3.238-17.133-3.238c-25.989,0-47.133,21.144-47.133,47.133S230.011,271,256,271   S303.133,249.856,303.133,223.867z'
            }
        ),
        createElement( 'path',
            {
                d: 'M505.41,211.446c-4.123-2.791-9.36-3.355-13.98-1.506l-160.667,64.267c-5.695,2.278-9.429,7.793-9.429,13.927v132.838   c-5.315-2.082-11.09-3.238-17.133-3.238c-25.989,0-47.133,21.144-47.133,47.133S278.211,512,304.2,512s47.133-21.144,47.133-47.133   V362.555L482,310.289v46.416c-5.315-2.082-11.09-3.238-17.133-3.238c-25.989,0-47.133,21.144-47.133,47.133   s21.144,47.133,47.133,47.133S512,426.589,512,400.6V223.867C512,218.889,509.531,214.236,505.41,211.446z'
            }
        ),
    ),
    category: 'custom-blocks',

    attributes: {

    },

    edit( { attributes, className, setAttributes } ) {
        return (
            <section className={ className + ' instruments' }>
                <InnerBlocks
                    allowedBlocks={['childress/instrument']}
                    template={[
                        ['childress/instrument'],
                        ['childress/instrument'],
                    ]}
                />
            </section>
        );
    },

    save( { attributes } ) {
        return (
            <section className='instruments container'>
                <InnerBlocks.Content />
            </section>
        );
    },
} );

registerBlockType( 'childress/instrument', {
    title: 'Instrument',
    icon: createElement('svg', 
        { 
            width: 512,
            height: 512,
            viewBox: '0 0 512 512'
        },
        createElement( 'path',
            {
                d: 'm391.941406 382.019531c0 5.523438-4.476562 10-10 10-5.523437 0-10-4.476562-10-10 0-5.523437 4.476563-10 10-10 5.523438 0 10 4.476563 10 10zm0 0'
            }
        ),
        createElement( 'path',
            {
                d: 'm160.957031 12.066406-39.488281 26.332032c-1.6875 1.125-3.640625 1.671874-5.546875 1.671874h-45.929687c-1.976563 0-3.90625.585938-5.546876 1.679688l-59.992187 39.996094c-3.667969 2.441406-5.300781 7-4.023437 11.214844 1.277343 4.21875 5.164062 7.101562 9.570312 7.101562h127.261719c4.644531 0 9.285156-1.097656 13.417969-3.167969 2.195312-1.101562 12.304687-6.15625 21.296874-10.652343v316.785156c0 60.085937 48.882813 108.972656 108.972657 108.972656 47.269531 0 70.691406-24.078125 109.492187-63.96875 37.175782-38.222656 55.089844-56.660156 114.648438-76.523438 3.351562-1.117187 5.867187-3.925781 6.609375-7.382812.742187-3.457031-.394531-7.050781-2.992188-9.449219l-129.980469-119.984375c-2.699218-2.488281-6.550781-3.300781-10.027343-2.109375-3.472657 1.191407-6.015625 4.195313-6.621094 7.820313-6.34375 38.164062-30.4375 83.417968-55.546875 113.0625-19.015625 22.457031-30.207031 26.003906-32.324219 25.722656-.390625-.476562-2.25-3.226562-2.25-12.40625v-36.472656c3.132813 1.109375 6.496094 1.71875 10 1.71875 16.539063 0 29.996094-13.457032 29.996094-29.996094s-13.457031-29.996094-29.996094-29.996094c-3.503906 0-6.867187.613282-10 1.722656v-29.4375c3.132813 1.109376 6.496094 1.71875 10 1.71875 16.539063 0 29.996094-13.453124 29.996094-29.992187 0-16.542969-13.457031-29.996094-29.996094-29.996094-3.503906 0-6.867187.609375-10 1.71875v-29.433593c3.132813 1.109374 6.496094 1.71875 10 1.71875 16.539063 0 29.996094-13.457032 29.996094-29.996094 0-16.539063-13.457031-29.996094-29.996094-29.996094-3.503906 0-6.867187.609375-10 1.71875v-28.363281c0-60.988281-64.636719-92.234375-111-61.351563zm71.007813 279.96875v-65.992187h19.996094v65.992187zm-39.992188-171.976562h9.996094c5.335938 0 9.71875 4.167968 9.980469 9.492187.003906.039063.003906.074219.007812.113281.007813.128907.007813.265626.007813.394532v171.972656c0 5.515625-4.484375 10-9.996094 10h-10v-191.972656zm39.992188 85.988281v-66.988281h19.996094v66.988281zm-158.949219-145.976563h38.96875v19.996094h-68.964844zm68.699219 18.949219c-1.367188.683594-2.90625 1.046875-4.457032 1.046875h-5.277343v-24.664062c.195312-.125.390625-.242188.585937-.371094l39.480469-26.324219c32.570313-21.695312 79.914063-.96875 79.914063 44.710938v45.640625h-22.082032c-4.390625-11.171875-15.257812-18.996094-27.910156-18.996094h-10v-29.996094c0-7.46875-7.882812-12.234375-14.46875-8.941406-2.261719 1.128906-31.757812 15.871094-35.785156 17.894531zm236.234375 182.171875 104.976562 96.898438c-6.550781 2.449218-13.328125 5.210937-20.304687 8.464844l-91.507813-84.4375c2.703125-7.136719 4.988281-14.125 6.835938-20.925782zm-55.6875 104.640625c15.308593-18.195312 29.675781-41.019531 40.546875-64.171875l80.988281 74.738282c-28.972656 16.917968-44.773437 34.128906-67.691406 57.6875-37.507813 38.5625-56.332031 57.917968-95.15625 57.917968-49.0625 0-88.976563-39.914062-88.976563-88.976562v-71h9.996094c13.035156 0 24.148438-8.359375 28.277344-19.996094h21.714844v54.75c0 23.484375 9.9375 30.367188 18.269531 32.007812 18.304687 3.597657 40.007812-18.664062 52.03125-32.957031zm-40.304688-73.796875c5.511719 0 10 4.484375 10 9.996094 0 5.515625-4.488281 10-10 10s-10-4.484375-10-10c0-5.511719 4.488281-9.996094 10-9.996094zm0-85.988281c5.511719 0 10 4.484375 10 10 0 5.511719-4.488281 9.996094-10 9.996094s-10-4.484375-10-9.996094c0-5.515625 4.488281-10 10-10zm0-85.988281c5.511719 0 10 4.488281 10 10 0 5.511718-4.488281 10-10 10s-10-4.488282-10-10c0-5.511719 4.488281-10 10-10zm0 0'
            }
        ),
        createElement( 'path',
            {
                d: 'm329.789062 451.722656 32.726563-32.707031c3.90625-3.902344 3.90625-10.234375.003906-14.136719-3.90625-3.90625-10.234375-3.910156-14.140625-.003906-48.378906 48.347656-28.238281 28.441406-33.34375 33.324219-3.988281 3.816406-4.125 10.148437-.308594 14.136719 3.609376 3.769531 9.992188 4.652343 15.0625-.613282zm0 0'
            }
        ),
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
        title: {
            type: 'string'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { title, imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className={ className + ' instrument' }>
                <MediaUpload
                    label='Image'
                    onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt, imageId: media.id } ) } }
                    type='image'
                    value={ imageUrl }
                    render={ ({ open }) => (
                        <Button className={ imageId ? 'image-button instrument__img' : 'button button-large instrument__img' } onClick={ open }>
                            { imageId ? <img src={ imageUrl } /> : 'Select Image' }
                        </Button>
                    ) }
                />
                <div className='instrument__info'>
                    <h3 className='instrument__title'>
                        <RichText
                            value={ title }
                            onChange={ ( value ) => { setAttributes({ title: value }) } }
                            placeholder='Title'
                        />
                    </h3>
                    <InnerBlocks
                        template={[
                            ['childress/instrument-list', { listTitle: 'Eligible Instruments:', type: 'eligible' }],
                            ['childress/instrument-list', { listTitle: 'Services Include:', type: 'services' }],
                        ]}
                        templateLock='all'
                    />
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { title, imageUrl, imageAlt, imageId } = attributes;

        return (
            <div className='instrument'>
                <img src={ imageUrl } alt={ imageAlt } className={ 'instrument__img wp-image-' + imageId } />
                <div className='instrument__info'>
                    <h3 className='instrument__title'><RichText.Content value={ title } /></h3>
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    },
} );

registerBlockType( 'childress/instrument-list', {
    title: 'Instrument List',
    icon: createElement('svg', 
        { 
            width: 512,
            height: 512,
            viewBox: '0 0 512 512'
        },
        createElement( 'path',
            {
                d: 'm391.941406 382.019531c0 5.523438-4.476562 10-10 10-5.523437 0-10-4.476562-10-10 0-5.523437 4.476563-10 10-10 5.523438 0 10 4.476563 10 10zm0 0'
            }
        ),
        createElement( 'path',
            {
                d: 'm160.957031 12.066406-39.488281 26.332032c-1.6875 1.125-3.640625 1.671874-5.546875 1.671874h-45.929687c-1.976563 0-3.90625.585938-5.546876 1.679688l-59.992187 39.996094c-3.667969 2.441406-5.300781 7-4.023437 11.214844 1.277343 4.21875 5.164062 7.101562 9.570312 7.101562h127.261719c4.644531 0 9.285156-1.097656 13.417969-3.167969 2.195312-1.101562 12.304687-6.15625 21.296874-10.652343v316.785156c0 60.085937 48.882813 108.972656 108.972657 108.972656 47.269531 0 70.691406-24.078125 109.492187-63.96875 37.175782-38.222656 55.089844-56.660156 114.648438-76.523438 3.351562-1.117187 5.867187-3.925781 6.609375-7.382812.742187-3.457031-.394531-7.050781-2.992188-9.449219l-129.980469-119.984375c-2.699218-2.488281-6.550781-3.300781-10.027343-2.109375-3.472657 1.191407-6.015625 4.195313-6.621094 7.820313-6.34375 38.164062-30.4375 83.417968-55.546875 113.0625-19.015625 22.457031-30.207031 26.003906-32.324219 25.722656-.390625-.476562-2.25-3.226562-2.25-12.40625v-36.472656c3.132813 1.109375 6.496094 1.71875 10 1.71875 16.539063 0 29.996094-13.457032 29.996094-29.996094s-13.457031-29.996094-29.996094-29.996094c-3.503906 0-6.867187.613282-10 1.722656v-29.4375c3.132813 1.109376 6.496094 1.71875 10 1.71875 16.539063 0 29.996094-13.453124 29.996094-29.992187 0-16.542969-13.457031-29.996094-29.996094-29.996094-3.503906 0-6.867187.609375-10 1.71875v-29.433593c3.132813 1.109374 6.496094 1.71875 10 1.71875 16.539063 0 29.996094-13.457032 29.996094-29.996094 0-16.539063-13.457031-29.996094-29.996094-29.996094-3.503906 0-6.867187.609375-10 1.71875v-28.363281c0-60.988281-64.636719-92.234375-111-61.351563zm71.007813 279.96875v-65.992187h19.996094v65.992187zm-39.992188-171.976562h9.996094c5.335938 0 9.71875 4.167968 9.980469 9.492187.003906.039063.003906.074219.007812.113281.007813.128907.007813.265626.007813.394532v171.972656c0 5.515625-4.484375 10-9.996094 10h-10v-191.972656zm39.992188 85.988281v-66.988281h19.996094v66.988281zm-158.949219-145.976563h38.96875v19.996094h-68.964844zm68.699219 18.949219c-1.367188.683594-2.90625 1.046875-4.457032 1.046875h-5.277343v-24.664062c.195312-.125.390625-.242188.585937-.371094l39.480469-26.324219c32.570313-21.695312 79.914063-.96875 79.914063 44.710938v45.640625h-22.082032c-4.390625-11.171875-15.257812-18.996094-27.910156-18.996094h-10v-29.996094c0-7.46875-7.882812-12.234375-14.46875-8.941406-2.261719 1.128906-31.757812 15.871094-35.785156 17.894531zm236.234375 182.171875 104.976562 96.898438c-6.550781 2.449218-13.328125 5.210937-20.304687 8.464844l-91.507813-84.4375c2.703125-7.136719 4.988281-14.125 6.835938-20.925782zm-55.6875 104.640625c15.308593-18.195312 29.675781-41.019531 40.546875-64.171875l80.988281 74.738282c-28.972656 16.917968-44.773437 34.128906-67.691406 57.6875-37.507813 38.5625-56.332031 57.917968-95.15625 57.917968-49.0625 0-88.976563-39.914062-88.976563-88.976562v-71h9.996094c13.035156 0 24.148438-8.359375 28.277344-19.996094h21.714844v54.75c0 23.484375 9.9375 30.367188 18.269531 32.007812 18.304687 3.597657 40.007812-18.664062 52.03125-32.957031zm-40.304688-73.796875c5.511719 0 10 4.484375 10 9.996094 0 5.515625-4.488281 10-10 10s-10-4.484375-10-10c0-5.511719 4.488281-9.996094 10-9.996094zm0-85.988281c5.511719 0 10 4.484375 10 10 0 5.511719-4.488281 9.996094-10 9.996094s-10-4.484375-10-9.996094c0-5.515625 4.488281-10 10-10zm0-85.988281c5.511719 0 10 4.488281 10 10 0 5.511718-4.488281 10-10 10s-10-4.488282-10-10c0-5.511719 4.488281-10 10-10zm0 0'
            }
        ),
        createElement( 'path',
            {
                d: 'm329.789062 451.722656 32.726563-32.707031c3.90625-3.902344 3.90625-10.234375.003906-14.136719-3.90625-3.90625-10.234375-3.910156-14.140625-.003906-48.378906 48.347656-28.238281 28.441406-33.34375 33.324219-3.988281 3.816406-4.125 10.148437-.308594 14.136719 3.609376 3.769531 9.992188 4.652343 15.0625-.613282zm0 0'
            }
        ),
    ),
    category: 'custom-blocks',
    parent: false,

    attributes: {
        listTitle: {
            type: 'string',
            default: 'default'
        },
        type: {
            type: 'string',
            default: 'eligible'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { listTitle, type } = attributes;

        var classes = 'instrument-list--' + type;

        return (
            <div className={ className + ' instrument-list ' + classes }>
                <p className='instrument-list__title'>{ listTitle }</p>
                <InnerBlocks
                    allowedBlocks={['core/list']}
                    template={[
                        ['core/list']
                    ]}
                    templateLock='all'
                />
            </div>
        );
    },

    save( { attributes } ) {
        const { listTitle, type } = attributes;

        var classes = 'instrument-list--' + type;

        return (
            <div className={ 'instrument-list ' + classes }>
                <p className='instrument-list__title'>{ listTitle }</p>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
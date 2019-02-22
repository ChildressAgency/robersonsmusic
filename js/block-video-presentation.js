registerBlockType( 'childress/video-presentation', {
    title: 'Video Presentation',
    icon: createElement('svg', 
        { 
            width: 512,
            height: 512,
            viewBox: '0 0 512 512'
        },
        createElement( 'path',
            {
                d: 'M0,0v390h166v122h180V390h166V0H0z M60,360H30v-30h30V360z M60,300H30v-30h30V300z M60,240H30v-30h30V240z M60,180H30v-30 h30V180z M60,120H30V90h30V120z M60,60H30V30h30V60z M241,482h-45V240.235h45V482z M288.841,180.235l16.667,30h-99.015l16.666-30 H288.841z M239.826,150.235L256,121.121l16.174,29.113L239.826,150.235z M316,482h-45V240.235h45V482z M422,360h-76V221.348 l-90-162l-90.001,162V360H90V30h332V360z M482,360h-30v-30h30V360z M482,300h-30v-30h30V300z M482,240h-30v-30h30V240z M482,180 h-30v-30h30V180z M482,120h-30V90h30V120z M482,60h-30V30h30V60z'
            }
        )
    ),
    category: 'custom-blocks',

    attributes: {
        title: {
            type: 'string'
        },
        date: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
        link: {
            type: 'string'
        },
        embedLink: {
            type: 'string'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { title, date, text, link, embedLink } = attributes;

        function getId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);

            if (match && match[2].length == 11) {
                return match[2];
            } else {
                return 'error';
            }
        }

        function setLink( value ){
            var videoId = getId( value );
            var link = '//www.youtube.com/watch/' + videoId;
            var embed = '//www.youtube.com/embed/' + videoId;

            setAttributes({ link: link, embedLink: embed });
        }

        return (
            <div className={ className + 'video' }>
                <div className='video__frame'>
                    <URLInputButton
                        url={ link }
                        onChange={ ( value ) => setLink( value ) }
                    />
                </div>
                <div className='video__info'>
                    <h3 className='video__presents'>Roberson&apos;s Music Presents:</h3>
                    <h4 className='video__title'>
                        <PlainText
                            value={ title }
                            onChange={ ( value ) => { setAttributes({ title: value }) } }
                            placeholder='Title'
                        />
                    </h4>
                    <p className='video__date'>
                        Published on
                        <PlainText
                            value={ date }
                            onChange={ ( value ) => { setAttributes({ date: value }) } }
                            placeholder='Date'
                        />
                    </p>
                    <p>
                        <PlainText
                            value={ text }
                            onChange={ ( value ) => { setAttributes({ text: value }) } }
                            placeholder='Description'
                        />
                    </p>
                </div>
            </div>
        );
    },

    save( { attributes } ) {
        const { title, date, text, link, embedLink } = attributes;

        return (
            <div className='container'>
                <div className='video'>
                    <div className='video__frame'>
                        <iframe width='560' height='315' src={ embedLink } frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                    </div>
                    <div className='video__info'>
                        <h3 className='video__presents'>Roberson's Music Presents:</h3>
                        <h4 className='video__title'>{ title }</h4>
                        <p className='video__date'>Published on { date }</p>
                        <p>{ text }</p>
                        <a href={ link } className='video__link'>View on Youtube</a>
                    </div>
                </div>
            </div>
        );
    },
} );

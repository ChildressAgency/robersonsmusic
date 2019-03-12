registerBlockType( 'childress/post-display', {
    title: 'Display Posts',
    icon: 'admin-post',
    category: 'custom-blocks',

    attributes: {
        
    },

    edit( { attributes, className, setAttributes } ) {
        return (
            <div className={ className + 'post-display' }>
                <p>Display Posts</p>
            </div>
        );
    },

    save(){
        return null;
    },
} );
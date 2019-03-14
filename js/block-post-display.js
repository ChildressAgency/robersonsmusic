const postCategories = [];

const allPosts = wp.apiFetch({path: "/wp/v2/categories"}).then(categories => {
    $.each( categories, function( key, val ) {
        postCategories.push({label: val.name, value: val.slug});
    });
    return postCategories;
});

registerBlockType( 'childress/post-display', {
    title: 'Display Posts',
    icon: 'admin-post',
    category: 'custom-blocks',

    attributes: {
        selectedCategory: {
            type: 'string'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { selectedCategory } = attributes;

        return (
            <div className={ className + 'post-display' }>
                <p>Display Posts</p>
                <PanelBody
                    title={ 'Category Selection' }>
                    <SelectControl
                        label="Category"
                        value={ selectedCategory ? selectedCategory : '' }
                        options={ postCategories }
                        onChange={ ( value ) => setAttributes({ selectedCategory: value }) }
                    />
                </PanelBody>
            </div>
        );
    },

    save(){
        return null;
    },
} );

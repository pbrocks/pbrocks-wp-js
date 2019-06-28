const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;
 
registerBlockType( 'pbrocks-wp-js/block-meta', {
    title: 'Meta Text Block',
    icon: 'smiley',
    category: 'common',
 
    attributes: {
        blockValue: {
            type: 'string',
            source: 'meta',
            meta: 'pbrocks_wp_js_meta_block_field',
        },
    },
 
    edit( { className, setAttributes, attributes } ) {
 
        function updateBlockValue( blockValue ) {
            setAttributes( { blockValue } );
        }
 
        return (
            <div className={ className }>
                <TextControl
                    label="Meta Text Field"
                    value={ attributes.blockValue }
                    onChange={ updateBlockValue }
                />
            </div>
        );
    },
 
    // No information saved to the block
    // Data is saved to post meta via attributes
    save() {
        return null;
    }
} );
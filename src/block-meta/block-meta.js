( function( wp ) {
	var el = wp.element.createElement;
	var registerBlockType = wp.blocks.registerBlockType;
	var TextControl = wp.components.TextControl;
	// checkValue
	const PostTitleCheckbox = withState( {
		isChecked: true,
	} )( ( { isChecked, setState } ) => (
		<CheckboxControl
		label = "Show this Post/Page Title??"
		checked = { isChecked }
		onChange = { ( isChecked ) => { setState( { isChecked } ) } }
		/>
		) );

	const PBrocksPostStatus = () => {
		return(
			<PluginPostStatusInfo>
			<PostTitleCheckbox></PostTitleCheckbox>
			</PluginPostStatusInfo>
			)
	}

// registerPlugin( 'pbrocks-post-status', { render: PBrocksPostStatus } );

registerBlockType( 'pbrocks-wp-js/block-meta', {
	title: 'Meta Text Block',
	icon: 'smiley',
	category: 'pbrocks-wp-js',

	attributes: {
		blockValue: {
			type: 'string',
			source: 'meta',
			meta: 'pbrocks_wp_js_meta_block_field'
		}
		checkValue: {
			type: 'string',
			source: 'meta',
			meta: 'pbrocks_wp_js_meta_checkbox'
		}
	},

	edit: function( props ) {
		var className = props.className;
		var setAttributes = props.setAttributes;

		function updateBlockValue( blockValue ) {
			setAttributes({ blockValue });
		}

		return el(
			'div',
			{ className: className },
			el( PBrocksPostStatus, {
				label: 'Meta Xheckbox',
				value: props.attributes.checkValue,
				onChange: updateBlockValue
			} )
			);
	},

        // No information saved to the block
        // Data is saved to post meta via attributes
        save: function() {
        	return null;
        }
    } );
} )( window.wp );

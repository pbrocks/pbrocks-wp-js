( function( wp ) {
    const registerPlugin = wp.plugins.registerPlugin;
    const PluginSidebar = wp.editPost.PluginSidebar;
    const el = wp.element.createElement;
    const Text = wp.components.TextControl;
    const withSelect = wp.data.withSelect;
    const withDispatch = wp.data.withDispatch;
    const { PluginPostStatusInfo } = wp.editPost;
	const { FormToggle, CheckboxControl } = wp.components;
	const { withState } = wp.compose;
 
	const ToggleShowTitle = withState( {
	    checked: true,
	} )( ( { checked, setState } ) => (
	    <FormToggle 
	        checked={ checked }
	        onChange={ () => setState( state => ( { checked: ! state.checked } ) ) } 
	    />
	) );

 
// 	const PostTitleCheckbox = withState( {
// 	    isChecked: true,
// 	} )( ( { isChecked, setState } ) => (
// 	    <CheckboxControl
// 			label = "Show this Post/Page Title??"
// 			checked = { isChecked }
// 			onChange = { ( isChecked ) => { setState( { isChecked } ) } }
// 	    />
// 	) );

// 	const PBrocksPostStatus = () => {
// 	    return(
// 			<PluginPostStatusInfo>
// 				<PostTitleCheckbox></PostTitleCheckbox>
// 			</PluginPostStatusInfo>
// 	    )
// 	}

// registerPlugin( 'pbrocks-post-status', { render: PBrocksPostStatus } );

    const MetaBlockField = function( props ) {
        return el( ToggleShowTitle, {
            title: 'Meta Block Field',
            label: 'Meta Block Field',
            value: props.metaFieldValue,
            onChange: function( value ) {
                props.setMetaFieldValue( value );
            },
        } );
    }
 
    const MetaBlockFieldWithData = withSelect( function( select ) {
        return {
            metaFieldValue: select( 'core/editor' )
                .getEditedPostAttribute( 'meta' )
                [ 'sidebar_meta_toggle_field' ],
        }
    } )( MetaBlockField );
 
    const MetaBlockFieldWithDataAndActions = withDispatch(
        function( dispatch ) {
            return {
                setMetaFieldValue: function( value ) {
                    dispatch( 'core/editor' ).editPost(
                        { meta: { sidebar_meta_toggle_field: value } }
                    );
                }
            }
        }
    )( MetaBlockFieldWithData );
 
    registerPlugin( 'pbrocks-checkbox', {
        render: function() {
            return el( PluginSidebar,
                {
                    name: 'pbrocks-checkbox',
                    icon: 'sos',
                    title: 'PBrocks sidebar',
                },
                   
                el( 'div',
                    { className: 'plugin-sidebar-content', },
                    el( MetaBlockFieldWithDataAndActions )
                )
            );
        }
    } );
} )( window.wp );

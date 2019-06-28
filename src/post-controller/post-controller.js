( function( wp ) {
    const registerPlugin = wp.plugins.registerPlugin;
    const PluginSidebar = wp.editPost.PluginSidebar;
    const el = wp.element.createElement;
    const Text = wp.components.TextControl;
    const withSelect = wp.data.withSelect;
    const withDispatch = wp.data.withDispatch;
    const { PluginPostStatusInfo } = wp.editPost;
	const { FormToggle } = wp.components;
	const { withState } = wp.compose;
 
	const ToggleShowTitle = withState( {
	    checked: true,
	} )( ( { checked, setState } ) => (
	    <FormToggle 
	        checked={ checked }
	        onChange={ () => setState( state => ( { checked: ! state.checked } ) ) } 
	    />
	) );
	 
	const PBrocksPostStatus = () => {
	    return(
			<PluginPostStatusInfo>
				<p><ToggleShowTitle></ToggleShowTitle>
				 &nbsp;Show Page/Post Title</p>
			</PluginPostStatusInfo>
	    )
	}

registerPlugin( 'pbrocks-post-status', { render: PBrocksPostStatus } );

    const MetaBlockField = function( props ) {
        return el( Text, {
            label: 'Meta Block Field',
            value: props.metaFieldValue,
            onChange: function( content ) {
                props.setMetaFieldValue( content );
            },
        } );
    }
 
    const MetaBlockFieldWithData = withSelect( function( select ) {
        return {
            metaFieldValue: select( 'core/editor' )
                .getEditedPostAttribute( 'meta' )
                [ 'sidebar_meta_block_field' ],
        }
    } )( MetaBlockField );
 
    const MetaBlockFieldWithDataAndActions = withDispatch(
        function( dispatch ) {
            return {
                setMetaFieldValue: function( value ) {
                    dispatch( 'core/editor' ).editPost(
                        { meta: { sidebar_meta_block_field: value } }
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
                    { className: 'plugin-sidebar-content' },
                    el( MetaBlockFieldWithDataAndActions )
                )
            );
        }
    } );
} )( window.wp );

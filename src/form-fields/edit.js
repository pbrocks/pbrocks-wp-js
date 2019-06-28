/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;

const {
    CheckboxControl,
    TextControl,
    ToggleControl,
    SelectControl
} = wp.components;
const {
    withNotices,
    Button,
} = wp.components;

const slickWithNotices = withNotices(
    ( { noticeOperations, noticeUI } ) => {
        const addError = () => noticeOperations.createErrorNotice( 'Error message' );
        return (
            <div>
                { noticeUI }
                <Button isDefault onClick={ addError }>Add error</Button>
            </div>
        )
    }
);

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Edit extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const {
            attributes: { checkboxControl, textControl, toggleControl, selectControl },
            className, setAttributes, slickWithNotices } = this.props;

        return (
            <div className={ className }>

                <CheckboxControl
                    heading={ __( 'Checkbox Control', 'pbrocks-wp-js' ) }
                    label={ __( 'Check here', 'pbrocks-wp-js' ) }
                    help={ __( 'Checkbox control help text', 'pbrocks-wp-js' ) }
                    checked={ checkboxControl }
                    onChange={ checkboxControl => setAttributes( { checkboxControl } ) }
                />

                <TextControl
                    label={ __( 'Text Control 1', 'pbrocks-wp-js' ) }
                    help={ __( 'Text control help text', 'pbrocks-wp-js' ) }
                    value={ textControl }
					// onChange: ( value ) => { props.setAttributes( { value_one: value } ); }
                    onChange={ textControl => setAttributes( { textControl } ) }
                />

                <ToggleControl
                    label={ __( 'Toggle Control', 'pbrocks-wp-js' ) }
                    checked={ toggleControl }
                    onChange={ toggleControl => setAttributes( { toggleControl } ) }
                />

                <SelectControl
                    label={ __( 'Select Control', 'pbrocks-wp-js' ) }
                    value={ selectControl }
                    options={ [
                        { value: 'a', label: 'Option A' },
                        { value: 'b', label: 'Option B' },
                        { value: 'c', label: 'Option C' },
                    ]}
                    onChange={ selectControl => setAttributes( { selectControl } ) }
                />

            </div>
        );
    }
}

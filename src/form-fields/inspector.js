/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const {
  CheckboxControl,
  PanelBody,
  PanelRow,
  TextControl,
  ToggleControl,
  SelectControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      attributes: {
        checkboxControl,
        textControl,
        toggleControl,
        selectControl
      },
      setAttributes
    } = this.props;

    return (
      <InspectorControls>
        <PanelBody
          title={__('Panel Body Title', 'pbrocks-wp-js')}
          initialOpen={false}
        >
          <PanelRow>
            <p>{__('Panel Body Copy', 'pbrocks-wp-js')}</p>
          </PanelRow>
        </PanelBody>

        <PanelBody>
          <CheckboxControl
            heading={__('Checkbox Control', 'pbrocks-wp-js')}
            label={__('Check here', 'pbrocks-wp-js')}
            help={__('Checkbox control help text', 'pbrocks-wp-js')}
            checked={checkboxControl}
            onChange={checkboxControl => setAttributes({ checkboxControl })}
          />
        </PanelBody>

        <PanelBody>
            <TextControl
                label={ __( 'Text Control 1', 'pbrocks-wp-js' ) }
                help={ __( 'Text control help text', 'pbrocks-wp-js' ) }
                value={ textControl }
                onChange={ textControl => setAttributes( { textControl } ) }
            />
        </PanelBody>

        <PanelBody>
          <ToggleControl
            label={__('Toggle Control', 'pbrocks-wp-js')}
            checked={toggleControl}
            onChange={toggleControl => setAttributes({ toggleControl })}
          />
        </PanelBody>

        <PanelBody>
          <SelectControl
            label={__('Select Control', 'pbrocks-wp-js')}
            value={selectControl}
            options={[
              { value: 'a', label: 'Option A' },
              { value: 'b', label: 'Option B' },
              { value: 'c', label: 'Option C' }
            ]}
            onChange={selectControl => setAttributes({ selectControl })}
          />
        </PanelBody>
      </InspectorControls>
    );
  }
}

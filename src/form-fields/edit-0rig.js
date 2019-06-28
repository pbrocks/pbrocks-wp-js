/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    ColorPalette,
} = wp.editor;
const {
    CheckboxControl,
    RadioControl,
    RangeControl,
    TextControl,
    TextareaControl,
    ToggleControl,
    SelectControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Edit extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
        const {
            attributes: { checkboxControl, colorPaletteControl, radioControl, rangeControl, textControl, textareaControl, toggleControl, selectControl },
            className, setAttributes  } = this.props;

        return (
            <div className={ className }>

                <CheckboxControl
                    heading={ __( 'Checkbox Control', 'epaper-blockshop' ) }
                    label={ __( 'Check here', 'epaper-blockshop' ) }
                    help={ __( 'Checkbox control help text', 'epaper-blockshop' ) }
                    checked={ checkboxControl }
                    onChange={ checkboxControl => setAttributes( { checkboxControl } ) }
                />

                <ColorPalette
                    value={ colorPaletteControl }
                    onChange={ colorPaletteControl => setAttributes( { colorPaletteControl } ) }
                />

                <RadioControl
                    label={ __( 'Radio Control', 'epaper-blockshop' ) }
                    selected={ radioControl }
                    options={ [
                        { label: 'Author', value: 'a' },
                        { label: 'Editor', value: 'e' },
                    ]}
                    onChange={ radioControl => setAttributes( { radioControl } ) }
                />

                <RangeControl
                    beforeIcon="arrow-left-alt2"
                    afterIcon="arrow-right-alt2"
                    label={ __( 'Range Control', 'epaper-blockshop' ) }
                    value={ rangeControl }
                    onChange={ rangeControl => setAttributes( { rangeControl } ) }
                    min={ 1 }
                    max={ 10 }
                />

                <TextControl
                    label={ __( 'Text Control', 'epaper-blockshop' ) }
                    help={ __( 'Text control help text', 'epaper-blockshop' ) }
                    value={ textControl }
                    onChange={ textControl => setAttributes( { textControl } ) }
                />

                <TextareaControl
                    label={ __( 'Text Area Control', 'epaper-blockshop' ) }
                    help={ __( 'Text area control help text', 'epaper-blockshop' ) }
                    value={ textareaControl }
                    onChange={ textareaControl => setAttributes( { textareaControl } ) }
                />

                <ToggleControl
                    label={ __( 'Toggle Control', 'epaper-blockshop' ) }
                    checked={ toggleControl }
                    onChange={ toggleControl => setAttributes( { toggleControl } ) }
                />

                <SelectControl
                    label={ __( 'Select Control', 'epaper-blockshop' ) }
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

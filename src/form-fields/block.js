/**
 * Block dependencies
 */
 import classnames from 'classnames';
 import Inspector from './inspector';
 import Edit from './edit';
import icon from './icon';
import attributes from './attributes';
// import './style.scss';

const { __ } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	RichText,
} = wp.editor;

function getSettings(attributes) {
	let settings = [];
	for (let attribute in attributes) {
		let value = attributes[attribute];
		if ('boolean' === typeof attributes[attribute]) {
			value = value.toString();
		}
		settings.push(<li>{attribute}: {value}</li>);
	}
	return settings;
}

/**
* Register static block example block
*/
export default registerBlockType(
'pbrocks-wp-js/form-fields',
{
	title: __( 'FFS Form Fields', 'pbrocks-wp-js' ),
	description: __( 'An example of how to use form component in a block.', 'pbrocks-wp-js' ),
	category: 'pbrocks-wp-js',
	icon: {
		background: '#29c8aa',
		foreground: '#ffffff',
		src: icon,
	},
	keywords: [
	__('Palette', 'pbrocks-wp-js'),
	__('Settings', 'pbrocks-wp-js'),
	__('Scheme', 'pbrocks-wp-js'),
	],
	attributes,
	getEditWrapperProps(attributes) {
		const { blockAlignment } = attributes;
		if ('left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment) {
			return { 'data-align': blockAlignment };
		}
	},
	edit: props => {
		const { setAttributes } = props;

		return [
		<Inspector {...{ setAttributes, ...props }} />,
		<Edit {...{ setAttributes, ...props }} />
		];
	},
	save: props => {
		const { attributes } = props;

		const theSettings = getSettings(attributes);

		return (
		<div>
		<p>{__('Check the settings', 'pbrocks-wp-js')}</p>
		<ul>
		{theSettings}
		</ul>
		</div>
		);
	},
},
);

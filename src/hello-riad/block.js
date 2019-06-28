const { createElement } = wp.element;
const { registerBlockType } = wp.blocks;

registerBlockType('pbrocks-wp-js/hello-world', {
  title: 'Hello World',
  description: 'Just another Hello World block',
  icon: 'admin-site',
  category: 'pbrocks-wp-js',

  edit: function() {
    return <p>Hello Editor</p>;
  },

  save: function() {
    return <p>Hello Frontend</p>;
  }
});

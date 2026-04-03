import antfu from '@antfu/eslint-config';

export default antfu({
  formatters: true,
  // https://github.com/antfu/eslint-config?tab=readme-ov-file#editor-specific-disables
  isInEditor: false,
  stylistic: {
    semi: true,
  },

});

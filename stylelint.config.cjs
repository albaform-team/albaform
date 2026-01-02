module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],

  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      customSyntax: 'postcss-styled-syntax',
    },
  ],

  rules: {
    'declaration-block-no-duplicate-properties': [
      true,
      { ignore: ['consecutive-duplicates-with-different-values'] },
    ],
    'color-no-invalid-hex': true,
    'function-no-unknown': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'length-zero-no-unit': true,

    // CSS-in-JS 오탐 제거
    'nesting-selector-no-missing-scoping-root': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'media-query-no-invalid': null,
    'nesting-selector-no-missing-scoping-root': null,
  },
};

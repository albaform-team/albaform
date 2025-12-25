module.exports = {
  extends: ['stylelint-config-standard'],
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

    'media-query-no-invalid': null,

    'order/properties-order': [
      [
        {
          groupName: 'layout',
          properties: [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'flex',
            'flex-direction',
            'flex-wrap',
            'gap',
            'align-items',
            'justify-content',
          ],
        },
        {
          groupName: 'box-model',
          properties: ['box-sizing', 'width', 'height', 'margin', 'padding'],
        },
        {
          groupName: 'border-background',
          properties: [
            'border',
            'border-radius',
            'background',
            'background-color',
          ],
        },
        {
          groupName: 'visual',
          properties: ['box-shadow', 'opacity'],
        },
        {
          groupName: 'typography',
          properties: [
            'color',
            'font-size',
            'font-weight',
            'line-height',
            'text-align',
          ],
        },
        {
          groupName: 'interaction-animation',
          properties: ['cursor', 'transition', 'animation'],
        },
      ],
      {
        unspecified: 'bottom',
        emptyLineBeforeUnspecified: 'always',
      },
    ],

    // CSS-in-JS 오탐 제거
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
  },
};

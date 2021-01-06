const group = (pattern) => ({
  pattern,
  group: 'external',
  position: 'after',
});

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:import/typescript'],
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'index', 'sibling'],
        ],
        pathGroups: [group('@{components,styles}/**'), group('@utils/**')],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};

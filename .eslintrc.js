// prettier-ignore
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json']
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/semi': 'off',
    'linebreak-style': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-shadow': 'off',
    'react/prop-types': 0,
    'no-empty-pattern': 0,
    'no-alert': 0,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/space-before-function-paren': 0
  }
}

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    // 'eslint:recommended',
    // 'plugin:react/recommended',
    // 'plugin:react/jsx-runtime',
    // 'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier', 'react'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx'],
      },
    ],
    'prettier/prettier': 'error',
  },
};

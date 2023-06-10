module.exports = {
  root: true,
  extends: ['@react-native-community'],
  rules: {
    'react-native/no-inline-styles': 0,
    'react-native/no-unused-styles': 1,
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'no-console': 1,
    '@typescript-eslint/no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
};

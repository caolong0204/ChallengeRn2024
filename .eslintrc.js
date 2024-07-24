module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['react', 'react-native'],
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/sort-styles': [
      'error',
      'asc',
      { ignoreClassNames: false, ignoreStyleProperties: false },
    ],
  },
};

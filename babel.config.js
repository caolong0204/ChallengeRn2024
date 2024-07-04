module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          root: './src',
          graphql: './src/graphql',
          native_modules: './native_modules',
        },
      },
    ],
  ],
};

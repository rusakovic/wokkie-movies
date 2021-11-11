module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@types': './src/types',
          '@routes': './src/routes',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};

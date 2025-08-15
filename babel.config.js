module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@types': './src/types',
          '@': './src',
          tests: ['./tests/'],
        },
      },
    ],
  ],
};

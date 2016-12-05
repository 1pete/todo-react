module.exports = {
  babelrc: false,
  cacheDirectory: true,
  presets: [
    ['latest', { es2015: { modules: false } }],
    'react',
  ],
  plugins: [
    'react-hot-loader/babel',
    'transform-class-properties',
    ['transform-object-rest-spread', { useBuiltIns: true }],
  ],
};
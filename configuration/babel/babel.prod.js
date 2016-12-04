module.exports = {
  babelrc: false,
  presets: [
    ['latest', { es2015: { modules: false } }],
    'react',
  ],
  plugins: [
    'transform-class-properties',
    ['transform-object-rest-spread', { useBuiltIns: true }],
  ],
};

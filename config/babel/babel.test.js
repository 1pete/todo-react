module.exports = {
  babelrc: false,
  presets: [
    'latest',
    'react',
  ],
  plugins: [
    'istanbul',
    'transform-class-properties',
    ['transform-object-rest-spread', { useBuiltIns: true }],
  ],
}

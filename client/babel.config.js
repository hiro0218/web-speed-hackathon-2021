module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        modules: 'commonjs',
        useBuiltIns: 'usage',
        targets: 'last 1 Chrome major version',
      },
    ],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV,
      },
    ],
  ],
};

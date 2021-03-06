// eslint-disable-next-line func-names
module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ];
  const plugins = ['import-graphql'];

  return {
    presets,
    plugins,
  };
};

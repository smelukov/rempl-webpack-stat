module.exports = {
  rules: {
    config: {},
    bundle: {
      '@statoscope/rules-webpack/black-list': 'rxjs',
    },
    diff: {
      '@statoscope/rules-webpack/no-more-usage': 'lodash',
    },
  },
};

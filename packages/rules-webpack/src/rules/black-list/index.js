import makeJora from '../makeJora';

module.exports = {
  level: 'bundle', // config, bundle, diff
  create(context) {
    const severity = context.getSeverity();
    const options = context.getOptions();
    const blackList = Array.form(options);

    return (stats) => {
      const jora = makeJora(stats);
    };
  },
};

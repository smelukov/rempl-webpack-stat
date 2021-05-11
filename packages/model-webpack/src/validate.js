const { validate } = require('ajv');
const schema = require('./schema/stats.json');

export default function validateStats(stats) {
  try {
    validate(schema, stats);
    return { result: true };
  } catch (e) {
    return { result: false, message: e.message };
  }
}

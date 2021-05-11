import { makeJora } from '@statoscope/model-webpack';

const cache = new WeakMap();

export default function make(stats) {
  const cached = cache.get(stats);

  if (!cached) {
    const jora = makeJora(stats);
    cache.set(stats, jora);
    return jora;
  }

  return cached;
}

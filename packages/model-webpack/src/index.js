import jora from 'jora';

import joraHelpers from './jora-helpers';
import normalize from './normalize';

export { default as makeEntityResolver } from './entity-resolver';
export { default as validate } from './validate';
export * as module from './module';

export { joraHelpers, normalize };

export function makeJora(stats) {
  const { files, compilationMap } = normalize(stats);
  const j = jora.setup({
    ...joraHelpers(compilationMap),
  });
  const context = {};

  return (query) => j(query)(files, context);
}

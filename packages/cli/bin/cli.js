#!/usr/bin/env node

const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const statoscopeConfigs = ['statoscope.js', 'statoscope.json'];
let actualConfig;

for (const config of statoscopeConfigs) {
  const absConfigPath = path.resolve(config);
  try {
    actualConfig = require(absConfigPath);
    break;
  } catch (e) {}
}

yargs(hideBin(process.argv))
  .command(
    'validate [stats-path]',
    'validate webpack stats',
    (yargs) => {
      return yargs.positional('stats', {
        describe: 'path to a stats.json',
        type: 'string',
      });
    },
    (argv) => {
      console.log(argv);
    }
  )
  .option('config', {
    alias: 'c',
    type: 'string',
    description: 'Statoscope config path',
    default: actualConfig,
  }).argv;

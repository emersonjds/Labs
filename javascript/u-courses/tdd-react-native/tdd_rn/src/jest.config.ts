import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    '^variables$': 'variables/dist/cjs',
    '^[NAME OF MODULE YOU WANT TO IMPORT]$': '[NAME OF MODULE YOU WANT TO IMPORT]/dist/cjs'
  }
};
export default config;

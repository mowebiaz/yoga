import * as migration_20260130_090151 from './20260130_090151';

export const migrations = [
  {
    up: migration_20260130_090151.up,
    down: migration_20260130_090151.down,
    name: '20260130_090151'
  },
];

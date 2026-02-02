import * as migration_20260130_090151 from './20260130_090151';
import * as migration_20260131_151321 from './20260131_151321';
import * as migration_20260202_133558 from './20260202_133558';

export const migrations = [
  {
    up: migration_20260130_090151.up,
    down: migration_20260130_090151.down,
    name: '20260130_090151',
  },
  {
    up: migration_20260131_151321.up,
    down: migration_20260131_151321.down,
    name: '20260131_151321',
  },
  {
    up: migration_20260202_133558.up,
    down: migration_20260202_133558.down,
    name: '20260202_133558'
  },
];

import * as migration_20250822_221352_initial from './20250822_221352_initial';

export const migrations = [
  {
    up: migration_20250822_221352_initial.up,
    down: migration_20250822_221352_initial.down,
    name: '20250822_221352_initial'
  },
];

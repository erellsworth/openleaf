// jest.config.ts
import type { InitialOptionsTsJest } from 'ts-jest/dist/types'
import jsWithTs from 'ts-jest/presets/js-with-ts/jest-preset';

const config: InitialOptionsTsJest = {
    globalSetup: './jest-setup.js',
    transform: {
        ...jsWithTs.transform,
    },
}
export default config
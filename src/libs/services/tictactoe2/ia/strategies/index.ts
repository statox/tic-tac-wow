import type { BoardCoord } from '../../game';
import { getMoveHardcoded } from './hardcodedRules';
import { getMoveRandom } from './random';

export * from './random';
export * from './hardcodedRules';

export type ComputerMethodName = 'random' | 'hardcodedRules';

export const computerMethods = {
    random: getMoveRandom,
    hardcodedRules: getMoveHardcoded
} as {
    [methodName in ComputerMethodName]: (...args: unknown[]) => BoardCoord;
};

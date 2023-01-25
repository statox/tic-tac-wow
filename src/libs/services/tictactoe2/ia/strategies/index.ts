import type { BoardCoord } from '../../game';
import { getMoveCompleteHardcoded } from './hardcodedCompleteRules';
import { getMoveHardcoded } from './hardcodedRules';
import { getMoveRandom } from './random';

export * from './random';
export * from './hardcodedRules';

export type ComputerMethodName = 'random' | 'hardcodedRules' | 'hardcodedRulesComplete';

export const computerMethods = {
    random: getMoveRandom,
    hardcodedRules: getMoveHardcoded,
    hardcodedRulesComplete: getMoveCompleteHardcoded
} as {
    [methodName in ComputerMethodName]: (...args: unknown[]) => BoardCoord;
};

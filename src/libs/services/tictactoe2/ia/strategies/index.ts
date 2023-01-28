import { getMoveMinmax } from './minmax';
import { getMoveCompleteHardcoded } from './hardcodedCompleteRules';
import { getMoveHardcoded } from './hardcodedRules';
import { getMoveRandom } from './random';

export * from './hardcodedRules';
export * from './random';

export type ComputerMethodName = 'random' | 'hardcodedRules' | 'hardcodedRulesComplete' | 'minmax';

export type AIChoice = {
    move: number;
    score: number;
    reason: string;
};

export const computerMethods = {
    random: getMoveRandom,
    hardcodedRules: getMoveHardcoded,
    hardcodedRulesComplete: getMoveCompleteHardcoded,
    minmax: getMoveMinmax
} as {
    [methodName in ComputerMethodName]: (...args: unknown[]) => AIChoice;
};

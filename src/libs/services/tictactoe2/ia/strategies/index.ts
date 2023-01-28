import { getMoveBFS } from './bfs';
import { getMoveCompleteHardcoded } from './hardcodedCompleteRules';
import { getMoveHardcoded } from './hardcodedRules';
import { getMoveRandom } from './random';

export * from './bfs';
export * from './hardcodedRules';
export * from './random';

export type ComputerMethodName = 'random' | 'hardcodedRules' | 'hardcodedRulesComplete' | 'BFS';

export type AIChoice = {
    move: number;
    score: number;
    reason: string;
};

export const computerMethods = {
    random: getMoveRandom,
    hardcodedRules: getMoveHardcoded,
    hardcodedRulesComplete: getMoveCompleteHardcoded,
    BFS: getMoveBFS
} as {
    [methodName in ComputerMethodName]: (...args: unknown[]) => AIChoice;
};

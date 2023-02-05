import { getMoveMinmax } from './minmax';
import { getMoveRandom } from './random';

export type ComputerMethodName = 'random' | 'minmax';

export type AIChoice = {
    move: number;
    score: number;
    reason: string;
};

export const computerMethods = {
    random: getMoveRandom,
    minmax: getMoveMinmax
} as {
    [methodName in ComputerMethodName]: (...args: unknown[]) => AIChoice;
};

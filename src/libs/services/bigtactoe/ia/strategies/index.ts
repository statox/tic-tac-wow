import { getMoveRandom } from './random';

export type ComputerMethodName = 'random';

export type AIChoice = {
    move: number;
    score: number;
    reason: string;
};

export const computerMethods = {
    random: getMoveRandom
} as {
    [methodName in ComputerMethodName]: (...args: unknown[]) => AIChoice;
};

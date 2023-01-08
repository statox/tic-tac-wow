import { makeBestMoveByEuristic } from './makeBestMoveByEuristic';
import { makeRandomMove } from './makeRandomMove';
import { makeWinningMoveOrRandom } from './makeWinningMoveOrRandom';
import type { Strategy, StrategyFunction } from './types';

export * from './makeRandomMove';
export * from './makeWinningMoveOrRandom';
export * from './makeBestMoveByEuristic';

export const strategyFunctions: Record<Strategy, StrategyFunction> = {
    random: makeRandomMove,
    win_or_random: makeWinningMoveOrRandom,
    euristic: makeBestMoveByEuristic
};

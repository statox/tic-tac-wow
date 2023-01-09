import { makeBestMoveByEuristic } from './makeBestMoveByEuristic';
import { makeMinmaxMove } from './makeMinmaxMove';
import { makeRandomMove } from './makeRandomMove';
import { makeWinningMoveOrRandom } from './makeWinningMoveOrRandom';
import type { Strategy, StrategyFunction } from './types';

// exported for tests
export * from './makeWinningMoveOrRandom';

export const strategyFunctions: Record<Strategy, StrategyFunction> = {
    random: makeRandomMove,
    win_or_random: makeWinningMoveOrRandom,
    euristic: makeBestMoveByEuristic,
    minmax: makeMinmaxMove
};

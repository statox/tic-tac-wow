import { makeAlphabetaMove } from './alphabeta';
import { makeAlphabetaOrderedMove } from './alphabeta_with_order';
import { makeBestMoveByEuristic } from './euristic_no_depth';
import { makeMinmaxMove } from './minmax';
import { makeNegamaxMove } from './negamax';
import { makeRandomMove } from './random';
import { makeWinningMoveOrRandom } from './random_with_win';
import type { Strategy, StrategyFunction } from './types';

// exported for tests
export * from './random_with_win';

export const strategyFunctions: Record<Strategy, StrategyFunction> = {
    random: makeRandomMove,
    win_or_random: makeWinningMoveOrRandom,
    euristic: makeBestMoveByEuristic,
    minmax: makeMinmaxMove,
    negamax: makeNegamaxMove,
    alphabeta: makeAlphabetaMove,
    alphabeta_ordered: makeAlphabetaOrderedMove
};

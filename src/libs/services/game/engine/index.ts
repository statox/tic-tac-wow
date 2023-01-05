import type { Strategy, StrategyFunction } from '../ia/types';
import type { State } from '../state-machine';

import { checkWinner } from '../check';
import { makeRandomMove, makeWinningMoveOrRandom } from '../ia';
import { getNewGame } from '../service';

const strategyFunctions: Record<Strategy, StrategyFunction> = {
    random: makeRandomMove,
    win_or_random: makeWinningMoveOrRandom
};

export type GameStats = {
    nbMoves: number;
    finalState: State;
};

export const playAGame = (player1Strat: Strategy, player2Strat: Strategy): GameStats => {
    const p1Function = strategyFunctions[player1Strat];
    const p2Function = strategyFunctions[player2Strat];

    const game = getNewGame();

    let nbMoves = 0;
    while (!['draw', 'winner'].includes(game.state.action)) {
        p1Function(game, game.player1);
        nbMoves++;
        checkWinner(game);
        if (['draw', 'winner'].includes(game.state.action)) {
            continue;
        }
        p2Function(game, game.player2);
        nbMoves++;
        checkWinner(game);
    }

    return {
        nbMoves,
        finalState: { ...game.state }
    };
};

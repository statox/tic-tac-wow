import type { Strategy, StrategyFunction } from '../ia/strategies/types';
import type { State } from '../state-machine';

import { checkWinner } from '../check';
import { makeRandomMove, makeWinningMoveOrRandom } from '../ia';
import { getNewGame } from '../service';
import { printGameGrid, printGameHands } from '../helpers';

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
    while (nbMoves < 10 && !['draw', 'winner'].includes(game.state.action)) {
        p1Function(game, game.player1);
        nbMoves++;
        checkWinner(game);
        printGameGrid(game);
        printGameHands(game);
        if (['draw', 'winner'].includes(game.state.action)) {
            continue;
        }
        p2Function(game, game.player2);
        nbMoves++;
        checkWinner(game);
        printGameGrid(game);
        printGameHands(game);
        console.log();
    }

    return {
        nbMoves,
        finalState: { ...game.state }
    };
};

import type { Strategy } from '../ia/strategies/types';
import type { State } from '../state-machine';

import { checkWinner } from '../check';
import { strategyFunctions } from '../ia';
import { getNewGame } from '../service';
import { printGameGrid, printGameHands } from '../helpers';

export type GameStats = {
    nbMoves: number;
    finalState: State;
};

export type GameParams = {
    player1Strat: Strategy;
    player2Strat: Strategy;
    showSteps?: true;
};

export const playAGame = ({ player1Strat, player2Strat, showSteps }: GameParams): GameStats => {
    const p1Function = strategyFunctions[player1Strat];
    const p2Function = strategyFunctions[player2Strat];

    const game = getNewGame();

    let nbMoves = 0;
    while (nbMoves < 10 && !['draw', 'winner'].includes(game.state.action)) {
        p1Function(game, game.player1);
        nbMoves++;
        checkWinner(game);
        if (showSteps) {
            printGameGrid(game);
            printGameHands(game);
        }
        if (['draw', 'winner'].includes(game.state.action)) {
            continue;
        }
        p2Function(game, game.player2);
        nbMoves++;
        checkWinner(game);
        if (showSteps) {
            printGameGrid(game);
            printGameHands(game);
            console.log();
        }
    }

    return {
        nbMoves,
        finalState: { ...game.state }
    };
};

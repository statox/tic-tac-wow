import { checkWinner } from '../check';
import { strategyFunctions } from '../ia';
import { getNewGame } from '../service';
import { printGameComplete, printGameGrid, printGameHands } from '../helpers';
import type { GameParams, GameStats } from './types';

export const playAGame = ({
    player1Strat,
    player2Strat,
    showSteps,
    showFinalGame
}: GameParams): GameStats => {
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

    if (showFinalGame) {
        printGameComplete(game);
    }

    return {
        nbMoves,
        finalState: { ...game.state }
    };
};

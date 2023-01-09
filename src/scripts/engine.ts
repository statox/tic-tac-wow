import type { Strategy } from 'src/libs/services/game/ia/strategies/types';
import { playAGame } from '../libs/services/game/engine';

const compareStrats = (p1Strat: Strategy, p2Strat: Strategy, numberOfGames: number) => {
    const finalStates = [];
    const stats = {
        totalGame: numberOfGames,
        p1Strat: p1Strat,
        p2Strat: p2Strat,
        totalMoves: 0,
        avgMovesByGame: 0,
        p1Win: 0,
        p2Win: 0,
        draw: 0,
        p1WinPercent: 0,
        p2WinPercent: 0,
        drawPercent: 0,
        timeSeconds: 0
    };

    const computeStats = () => {
        const end = Date.now();
        stats.timeSeconds = (end - start) / 1000;

        stats.p1WinPercent = stats.p1Win / stats.totalGame;
        stats.p2WinPercent = stats.p2Win / stats.totalGame;
        stats.drawPercent = stats.draw / stats.totalGame;
        stats.avgMovesByGame = stats.totalMoves / stats.totalGame;
    };

    const start = Date.now();
    for (let _ = 0; _ < stats.totalGame; _++) {
        // console.log('Game', p1Strat, 'vs.', p2Strat, _);
        const { finalState, nbMoves } = playAGame({
            player1Strat: stats.p1Strat,
            player2Strat: stats.p2Strat,
            showSteps: false,
            showFinalGame: false
        });
        stats.totalMoves += nbMoves;
        finalStates.push(finalState);
        if (finalState.action === 'winner') {
            if (finalState.player === 1) {
                stats.p1Win++;
            } else {
                stats.p2Win++;
            }
        } else {
            stats.draw++;
        }
        // computeStats();
        // console.log(stats);
    }

    computeStats();
    console.log(stats);
};

const NB_GAMES = 100;
// compareStrats('random', 'random', NB_GAMES);
compareStrats('random', 'win_or_random', NB_GAMES);
compareStrats('random', 'euristic', NB_GAMES);
compareStrats('random', 'minmax', NB_GAMES);
// compareStrats('random', 'negamax', NB_GAMES);
// compareStrats('random', 'alphabeta', NB_GAMES);

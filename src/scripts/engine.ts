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

    const start = Date.now();
    for (let _ = 0; _ < stats.totalGame; _++) {
        const { finalState, nbMoves } = playAGame(stats.p1Strat, stats.p2Strat);
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
    }
    const end = Date.now();
    stats.timeSeconds = (end - start) / 1000;

    stats.p1WinPercent = stats.p1Win / stats.totalGame;
    stats.p2WinPercent = stats.p2Win / stats.totalGame;
    stats.drawPercent = stats.draw / stats.totalGame;
    stats.avgMovesByGame = stats.totalMoves / stats.totalGame;

    console.log(stats);
};

const NB_GAMES = 10000;
compareStrats('random', 'random', NB_GAMES);
compareStrats('win_or_random', 'random', NB_GAMES);
compareStrats('random', 'win_or_random', NB_GAMES);
compareStrats('win_or_random', 'win_or_random', NB_GAMES);

import { checkWinner, getGridCellLastPlayer } from '../../check';
import type { Game } from '../../types';
import { getHandsPossibleMoves } from '../helpers';

export const scoreGame = (game: Game) => {
    checkWinner(game);
    if (game.state.action === 'winner') {
        return game.state.player === 1 ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER;
    }

    if (game.state.action === 'draw') {
        return Number.MAX_SAFE_INTEGER / 2;
    }

    const movesp1 = getHandsPossibleMoves(game, game.player1);
    const movesp2 = getHandsPossibleMoves(game, game.player2);

    if (movesp1.length === 0 && movesp2.length === 0) {
        return Number.MAX_SAFE_INTEGER / 2;
    }

    let score = 0;

    // Check middle spot owner
    const middleLastPlayer = getGridCellLastPlayer(game.grid, 1, 1);
    if (middleLastPlayer === game.player1.player) {
        score += 2;
    } else if (middleLastPlayer === game.player2.player) {
        score -= 2;
    }

    const cornersPlayers = [
        getGridCellLastPlayer(game.grid, 0, 0),
        getGridCellLastPlayer(game.grid, 2, 0),
        getGridCellLastPlayer(game.grid, 0, 2),
        getGridCellLastPlayer(game.grid, 2, 2)
    ];
    cornersPlayers.forEach((p) => {
        if (p !== null) {
            score += p !== null && p === 1 ? 1 : -1;
        }
    });

    return score;
};

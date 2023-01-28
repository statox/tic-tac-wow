import type { AIChoice } from '.';
import { getBoardFreeSpots, indexToXY, makeMoveOnBoard, Player, type Board } from '../../game';

/*
 * This is the most basic strategy to play tictactoe
 * List all the available spots on the board and choose one randomly
 */
export function getMoveBFS(board: Board, player: Player): AIChoice {
    const freeSpots = getBoardFreeSpots(board);

    if (freeSpots.length === 0) {
        throw new Error('No available moves');
    }

    for (const spot of freeSpots) {
        const copy = { ...board };
        const move = indexToXY(spot);
        makeMoveOnBoard(copy, player, spot);
        console.log(copy, move);
    }

    return { score: 0, reason: 'random', move: indexToXY(1) };
}

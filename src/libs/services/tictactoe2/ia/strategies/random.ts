import type { AIChoice } from '.';
import { getBoardFreeSpots, type Board } from '../../game';

/*
 * This is the most basic strategy to play tictactoe
 * List all the available spots on the board and choose one randomly
 */
export function getMoveRandom(board: Board): AIChoice {
    const freeSpots = getBoardFreeSpots(board);

    if (freeSpots.length === 0) {
        throw new Error('No available moves');
    }

    const randIndex = Math.floor(Math.random() * freeSpots.length);
    const move = freeSpots[randIndex];

    return { score: 0, reason: 'random', move };
}

import { getBoardFreeSpots, indexToXY, type Board, type BoardCoord } from '../../game';

/*
 * This is the most basic strategy to play tictactoe
 * List all the available spots on the board and choose one randomly
 */
export function getMoveRandom(board: Board): BoardCoord {
    const freeSpots = getBoardFreeSpots(board);

    if (freeSpots.length === 0) {
        throw new Error('No available moves');
    }

    const randIndex = Math.floor(Math.random() * freeSpots.length);
    const moveAsIndex = freeSpots[randIndex];

    const move = indexToXY(moveAsIndex);

    if (move instanceof Error) {
        throw move;
    }
    return move;
}

import { getBoardFreeSpots, indexToXY, type Board, type BoardCoord } from '../game';

export function getMoveRandom(board: Board): BoardCoord {
    const freeSpots = getBoardFreeSpots(board);

    if (freeSpots.length === 0) {
        throw new Error('No available moves');
    }

    const randIndex = Math.floor(Math.random() * freeSpots.length);
    const moveAsIndex = freeSpots[randIndex];
    return indexToXY(moveAsIndex);
}

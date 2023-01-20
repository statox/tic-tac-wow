import { indexToXY, isValidMove, type Board, type BoardCoord } from '../game';

export function getMoveRandom(board: Board): BoardCoord {
    const validMoves = [];

    for (let i = 0; i < 9; i++) {
        const pos = indexToXY(i);
        if (isValidMove(board, pos)) {
            validMoves.push(pos);
        }
    }

    if (validMoves.length === 0) {
        throw new Error('No available moves');
    }

    const randIndex = Math.floor(Math.random() * validMoves.length);
    return validMoves[randIndex];
}

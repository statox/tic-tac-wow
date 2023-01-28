import { getBoardFreeSpots, makeMoveOnBoard, type Board, type Player } from '../../game';
import { boardAreEquivalent } from './boardRotation';

export function getPossibleMoves(board: Board, player: Player) {
    const freeSpots = getBoardFreeSpots(board);
    return freeSpots.map((moveAsIndex) => {
        const copy = { ...board };
        makeMoveOnBoard(copy, player, moveAsIndex);
        return { move: moveAsIndex, board: copy };
    });
}

export function getUniquePossibleMoves(board: Board, player: Player) {
    const moves = getPossibleMoves(board, player);

    return moves.reduce((dedupMoves, move) => {
        for (const existingMove of dedupMoves) {
            if (boardAreEquivalent(existingMove.board, move.board)) {
                return dedupMoves;
            }
        }
        dedupMoves.push(move);
        return dedupMoves;
    }, [] as { board: Board; move: number }[]);
}

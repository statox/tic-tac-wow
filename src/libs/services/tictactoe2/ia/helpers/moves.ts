import { getBoardFreeSpots, indexToXY, makeMoveOnBoard, type Board, type Player } from '../../game';
import { boardAreEquivalent } from './boardRotation';

export function getPossibleMoves(board: Board, player: Player) {
    const freeSpots = getBoardFreeSpots(board);
    return freeSpots.map((moveAsIndex) => {
        const move = indexToXY(moveAsIndex);
        if (move instanceof Error) {
            throw move;
        }
        const copy = { ...board };
        makeMoveOnBoard(copy, player, move);
        return copy;
    });
}

export function getUniquePossibleMoves(board: Board, player: Player) {
    const boards = getPossibleMoves(board, player);

    return boards.reduce((dedupMoves, board) => {
        for (const existingBoard of dedupMoves) {
            if (boardAreEquivalent(existingBoard, board)) {
                return dedupMoves;
            }
        }
        dedupMoves.push(board);
        return dedupMoves;
    }, [] as Board[]);
}
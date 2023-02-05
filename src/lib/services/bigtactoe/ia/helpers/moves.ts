import { getBoardFreeSpots, makeMoveOnBoard, type Board, type Player } from '../../game';

export function getPossibleMoves(board: Board, player: Player) {
    const freeSpots = getBoardFreeSpots(board);
    return freeSpots.map((moveAsIndex) => {
        const copy = [...board];
        makeMoveOnBoard(copy, player, moveAsIndex);
        return { move: moveAsIndex, board: copy };
    });
}

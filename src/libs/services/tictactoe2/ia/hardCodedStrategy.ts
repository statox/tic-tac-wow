import {
    getBoardFreeSpots,
    indexToXY,
    makeMoveOnBoard,
    Player,
    type Board,
    type BoardCoord
} from '../game';
import {
    moveTargetsCenter,
    moveTookCorner,
    moveTookOppositeCorner,
    moveTookSide,
    playerBlocksOpponent,
    playerWins
} from './heuristic/moveEvaluation';

export function getMoveHardcoded(board: Board, player: Player): BoardCoord {
    const freeSpots = getBoardFreeSpots(board);

    if (freeSpots.length === 0) {
        throw new Error('No available moves');
    }

    let bestScore = 0;
    let bestMove;

    console.log('choose hardcoded');
    console.log(board.toString());

    for (const spot of freeSpots) {
        const copy = { ...board };
        const move = indexToXY(spot);
        if (move instanceof Error) {
            throw move;
        }
        makeMoveOnBoard(copy, player, move);
        const score = scoreMove(copy, player, move);
        if (score > bestScore) {
            bestScore = score;
            bestMove = move;
            console.log(move, score, 'new best');
        } else {
            console.log(move, score);
        }
    }

    if (!bestMove) {
        throw new Error('Error in getMoveHardcoded');
    }
    return bestMove;
}

function scoreMove(board: Board, player: Player, move: BoardCoord) {
    if (playerWins(board, Player.player)) {
        return 8;
    }
    if (playerBlocksOpponent(board, player)) {
        return 7;
    }
    // TODO forks situations
    if (moveTargetsCenter(move)) {
        return 4;
    }
    if (moveTookOppositeCorner(board, player, move)) {
        return 3;
    }
    if (moveTookCorner(move)) {
        return 2;
    }
    if (moveTookSide(move)) {
        return 1;
    }
    return 0;
}

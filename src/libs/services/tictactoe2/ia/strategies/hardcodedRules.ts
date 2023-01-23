import {
    getBoardFreeSpots,
    indexToXY,
    makeMoveOnBoard,
    Player,
    type Board,
    type BoardCoord
} from '../../game';
import {
    moveBlockedOpponent,
    moveTargetsCenter,
    moveTookCorner,
    moveTookOppositeCorner,
    moveTookSide,
    playerWins
} from '../heuristic/moveEvaluation';

/*
 * This strategy is based on the rules enonced in the wiki page
 * https://en.wikipedia.org/wiki/Tic-tac-toe#strategy
 * It chooses the first available move from the following list:
 * 8 Win: If the player has two in a row, they can place a third to get three in a row.
 * 7 Block: If the opponent has two in a row, the player must play the third themselves to block the opponent.
 * 6 NOT IMPLEMENTED Fork: Cause a scenario where the player has two ways to win (two non-blocked lines of 2).
 * 5 NOT IMPLEMENTED Blocking an opponent's fork: If there is only one possible fork for the opponent, the player should block it. Otherwise, the player should block all forks in any way that simultaneously allows them to make two in a row. Otherwise, the player should make a two in a row to force the opponent into defending, as long as it does not result in them producing a fork. For example, if "X" has two opposite corners and "O" has the center, "O" must not play a corner move to win. (Playing a corner move in this scenario produces a fork for "X" to win.)
 * 4 Center: A player marks the center. (If it is the first move of the game, playing a corner move gives the second player more opportunities to make a mistake and may therefore be the better choice; however, it makes no difference between perfect players.)
 * 3 Opposite corner: If the opponent is in the corner, the player plays the opposite corner.
 * 2 Empty corner: The player plays in a corner square.
 * 1 Empty side: The player plays in a middle square on any of the four sides.
 *
 * To do that it gets all the available moves, score the previous criterion
 * and chooses the move with the highest score
 */
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
    if (moveBlockedOpponent(board, player, move)) {
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

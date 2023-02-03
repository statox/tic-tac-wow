import type { AIChoice } from '.';
import {
    getBoardFreeSpots,
    getGameState,
    getOpponent,
    Player,
    type Board,
    type GameState
} from '../../game';
import { getPossibleMoves } from '../helpers/moves';

type Node = {
    board: Board;
    player: Player;
    depth: number;
    moves: number[];
};
/*
 * This is the most basic strategy to play tictactoe
 * List all the available spots on the board and choose one randomly
 */
let analyzedNodes = 0;
export function getMoveMinmax(board: Board, player: Player): AIChoice {
    const freeSpots = getBoardFreeSpots(board);

    if (freeSpots.length === 0) {
        throw new Error('No available moves');
    }

    const node = { board, player, depth: 1, moves: [] };
    analyzedNodes = 0;
    const child = chooseChildDFS(node);
    const choice = {
        score: child.score,
        reason: child.reason,
        move: child.moves[0],
        analyzedNodes
    };
    analyzedNodes = 0;
    return choice;
}

function scoreState(state: GameState) {
    if (state === 'player_win') {
        return { score: 4, reason: state };
    }
    if (state === 'draw') {
        return { score: 3, reason: state };
    }
    if (state === 'over') {
        return { score: 2, reason: state };
    }
    if (state === 'not_over') {
        return { score: 1, reason: state };
    }
    if (state === 'computer_win') {
        return { score: 0, reason: state };
    }
    return { score: -1, reason: state };
}

const MAX_DEPTH = 6;
function chooseChildDFS(node: Node): { moves: number[]; score: number; reason: string } {
    analyzedNodes++;
    const state = getGameState(node.board);
    if (node.depth === MAX_DEPTH || state !== 'not_over') {
        return { moves: node.moves, ...scoreState(state) };
    }

    const possibleMoves = getPossibleMoves(node.board, node.player);

    // Maximizing player
    if (node.player === Player.player) {
        let bestChild;
        for (const move of possibleMoves) {
            const childNode: Node = {
                board: move.board,
                player: getOpponent(node.player),
                depth: node.depth + 1,
                moves: [...node.moves, move.move]
            };
            const child = chooseChildDFS(childNode);
            if (!bestChild || child.score > bestChild.score) {
                bestChild = child;
            }
        }
        if (!bestChild) {
            throw new Error('Couldnt get any best child for maximizing player');
        }
        return bestChild;
    }

    // Minimizing player
    let worstChild;
    for (const move of possibleMoves) {
        const childNode: Node = {
            board: move.board,
            player: getOpponent(node.player),
            depth: node.depth + 1,
            moves: [...node.moves, move.move]
        };
        const child = chooseChildDFS(childNode);
        if (!worstChild || child.score < worstChild.score) {
            worstChild = child;
        }
    }
    if (!worstChild) {
        throw new Error('Couldnt get any best child for maximizing player');
    }
    return worstChild;
}

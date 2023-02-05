import { matchMask, winMasks } from './mask';
import { Player, type Board } from './types';

export function spotIsFree(board: Board, i: number) {
    return i >= 0 && i < 16 && board[i] === 0;
}

export const playerAligned4 = (board: Board, player: Player) => {
    for (const mask of winMasks) {
        if (matchMask(board, player, mask)) {
            return true;
        }
    }
    return false;
};

const opponent = {
    1: Player.computer,
    2: Player.player
};
export const getOpponent = (player: Player) => {
    return opponent[player];
};

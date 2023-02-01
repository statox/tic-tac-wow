import { matchMask, winMasks } from './mask';
import { Player, type PlayerPieces } from './types';

export function countPlacedPieces(player: PlayerPieces) {
    let n = player;
    let count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

export function spotIsFree(player: PlayerPieces, index: number) {
    return spotIsFreeByIndex(player, index);
}

export function spotIsFreeByIndex(player: PlayerPieces, index: number) {
    // https://stackoverflow.com/a/62246924
    if ((player & (1 << index)) === 0) {
        return true;
    }
    return false;
}

export function placePlayerPieceByIndex(player: PlayerPieces, i: number) {
    return player + 2 ** i;
}

export const playerAligned3 = (player: PlayerPieces) => {
    for (const mask of winMasks) {
        if (matchMask(player, mask)) {
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

import { xyToIndex } from './coordinates';
import { matchMask, winMasks } from './mask';
import type { BoardCoord, PlayerPieces } from './types';

export function countPlacedPieces(player: PlayerPieces) {
    let n = player;
    let count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

export function spotIsFree(player: PlayerPieces, pos: BoardCoord) {
    const index = xyToIndex(pos);
    // https://stackoverflow.com/a/62246924
    if ((player & (1 << index)) === 0) {
        return true;
    }
    return false;
}

export function spotIsFreeByIndex(player: PlayerPieces, index: number) {
    // https://stackoverflow.com/a/62246924
    if ((player & (1 << index)) === 0) {
        return true;
    }
    return false;
}

export function placePlayerPiece(player: PlayerPieces, pos: BoardCoord) {
    const i = xyToIndex(pos);
    return player + 2 ** i;
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

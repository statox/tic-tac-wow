import { xyToIndex } from './coordinates';
import { matchMask, winMasks } from './mask';
import type { BoardCoord, PlayerPieces } from './types';

export function placePlayerPiece(player: PlayerPieces, pos: BoardCoord) {
    const i = xyToIndex(pos);

    return player + 2 ** (8 - i);
}

export const playerAligned3 = (player: PlayerPieces) => {
    for (const mask of winMasks) {
        if (matchMask(player, mask)) {
            return true;
        }
    }
    return false;
};

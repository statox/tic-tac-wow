import type { BoardCoord, PlayerPieces } from 'src/libs/services/tictactoe2';
import { placePlayerPiece } from 'src/libs/services/tictactoe2/player';
import { describe, expect, it } from 'vitest';

const cases = {
    NW: {
        pieces: 0b000000000,
        result: 0b100000000,
        pos: { x: 0, y: 0 }
    },
    N: {
        pieces: 0b000000000,
        result: 0b010000000,
        pos: { x: 1, y: 0 }
    },
    NE: {
        pieces: 0b000000000,
        result: 0b001000000,
        pos: { x: 2, y: 0 }
    },
    W: {
        pieces: 0b000000000,
        result: 0b000100000,
        pos: { x: 0, y: 1 }
    },
    C: {
        pieces: 0b000000000,
        result: 0b000010000,
        pos: { x: 1, y: 1 }
    },
    E: {
        pieces: 0b000000000,
        result: 0b000001000,
        pos: { x: 2, y: 1 }
    },
    SW: {
        pieces: 0b000000000,
        result: 0b000000100,
        pos: { x: 0, y: 2 }
    },
    S: {
        pieces: 0b000000000,
        result: 0b000000010,
        pos: { x: 1, y: 2 }
    },
    SE: {
        pieces: 0b000000000,
        result: 0b000000001,
        pos: { x: 2, y: 2 }
    }
} as {
    [key: string]: {
        pieces: PlayerPieces;
        pos: BoardCoord;
        result: PlayerPieces;
    };
};

describe('placePlayerPiece', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { pieces, pos, result } = cases[test];
        it(test, () => {
            expect(placePlayerPiece(pieces, pos)).toBe(result);
        });
    }
});

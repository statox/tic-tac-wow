import { placePlayerPieceByIndex, type PlayerPieces } from 'src/libs/services/tictactoe';
import { describe, expect, it } from 'vitest';
import {
    BOTTOM_INDEX,
    BOTTOM_LEFT_INDEX,
    BOTTOM_RIGHT_INDEX,
    CENTER_INDEX,
    LEFT_INDEX,
    RIGHT_INDEX,
    TOP_INDEX,
    TOP_LEFT_INDEX,
    TOP_RIGHT_INDEX
} from '../helpers';

const cases = {
    NW: {
        pieces: 0b000000000,
        result: 0b100000000,
        index: TOP_LEFT_INDEX
    },
    N: {
        pieces: 0b000000000,
        result: 0b010000000,
        index: TOP_INDEX
    },
    NE: {
        pieces: 0b000000000,
        result: 0b001000000,
        index: TOP_RIGHT_INDEX
    },
    W: {
        pieces: 0b000000000,
        result: 0b000100000,
        index: LEFT_INDEX
    },
    C: {
        pieces: 0b000000000,
        result: 0b000010000,
        index: CENTER_INDEX
    },
    E: {
        pieces: 0b000000000,
        result: 0b000001000,
        index: RIGHT_INDEX
    },
    SW: {
        pieces: 0b000000000,
        result: 0b000000100,
        index: BOTTOM_LEFT_INDEX
    },
    S: {
        pieces: 0b000000000,
        result: 0b000000010,
        index: BOTTOM_INDEX
    },
    SE: {
        pieces: 0b000000000,
        result: 0b000000001,
        index: BOTTOM_RIGHT_INDEX
    }
} as {
    [key: string]: {
        pieces: PlayerPieces;
        index: number;
        result: PlayerPieces;
    };
};

describe('placePlayerPiece', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { pieces, index, result } = cases[test];
        it(test, () => {
            expect(placePlayerPieceByIndex(pieces, index)).toBe(result);
        });
    }
});

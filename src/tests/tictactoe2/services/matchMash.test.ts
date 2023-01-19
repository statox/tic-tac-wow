import { matchMask } from 'src/libs/services/tictactoe2/mask';
import { describe, expect, it } from 'vitest';

const cases = {
    'Simple match 1': {
        board: 0b111000000,
        mask_: 0b111000000,
        result: true
    },
    'Simple match 2': {
        board: 0b000111000,
        mask_: 0b000111000,
        result: true
    },
    'Simple match 3': {
        board: 0b100100100,
        mask_: 0b100100100,
        result: true
    },
    'Simple match 4': {
        board: 0b010010010,
        mask_: 0b010010010,
        result: true
    },
    'Simple match 5': {
        board: 0b100010100,
        mask_: 0b100010100,
        result: true
    },
    'Match 1': {
        board: 0b111010100,
        mask_: 0b111000000,
        result: true
    },
    'Match 2': {
        board: 0b100111010,
        mask_: 0b000111000,
        result: true
    },
    'Match 3': {
        board: 0b101110100,
        mask_: 0b100100100,
        result: true
    },
    'Match 4': {
        board: 0b011010110,
        mask_: 0b010010010,
        result: true
    },
    'Match 5': {
        board: 0b111111111,
        mask_: 0b100010100,
        result: true
    },
    'Simple not match 1': {
        board: 0b110000000,
        mask_: 0b111000000,
        result: false
    },
    'Simple not match 2': {
        board: 0b000101000,
        mask_: 0b000111000,
        result: false
    },
    'Simple not match 3': {
        board: 0b100000100,
        mask_: 0b100100100,
        result: false
    },
    'Simple not match 4': {
        board: 0b010000010,
        mask_: 0b010010010,
        result: false
    },
    'Simple not match 5': {
        board: 0b000010100,
        mask_: 0b100010100,
        result: false
    },
    'Not match 1': {
        board: 0b110100100,
        mask_: 0b111000000,
        result: false
    },
    'Not match 2': {
        board: 0b110101000,
        mask_: 0b000111000,
        result: false
    },
    'Not match 3': {
        board: 0b100011100,
        mask_: 0b100100100,
        result: false
    },
    'Not match 4': {
        board: 0b011000010,
        mask_: 0b010010010,
        result: false
    },
    'Not match 5': {
        board: 0b000000000,
        mask_: 0b100010100,
        result: false
    }
} as {
    [key: string]: {
        board: number;
        mask_: number;
        result: boolean;
    };
};
describe('matchMask', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { board, mask_, result } = cases[test];
        it(test, () => {
            expect(matchMask(board, mask_)).toBe(result);
        });
    }
});

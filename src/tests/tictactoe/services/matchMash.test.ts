import { matchMask } from 'src/libs/services/tictactoe/mask';
import { describe, expect, it } from 'vitest';

const cases = {
    'Simple match 1': {
        b: 0b111000000,
        m: 0b111000000,
        r: true
    },
    'Simple match 2': {
        b: 0b000111000,
        m: 0b000111000,
        r: true
    },
    'Simple match 3': {
        b: 0b100100100,
        m: 0b100100100,
        r: true
    },
    'Simple match 4': {
        b: 0b010010010,
        m: 0b010010010,
        r: true
    },
    'Simple match 5': {
        b: 0b100010100,
        m: 0b100010100,
        r: true
    },
    'Match 1': {
        b: 0b111010100,
        m: 0b111000000,
        r: true
    },
    'Match 2': {
        b: 0b100111010,
        m: 0b000111000,
        r: true
    },
    'Match 3': {
        b: 0b101110100,
        m: 0b100100100,
        r: true
    },
    'Match 4': {
        b: 0b011010110,
        m: 0b010010010,
        r: true
    },
    'Match 5': {
        b: 0b111111111,
        m: 0b100010100,
        r: true
    },
    'Simple not match 1': {
        b: 0b110000000,
        m: 0b111000000,
        r: false
    },
    'Simple not match 2': {
        b: 0b000101000,
        m: 0b000111000,
        r: false
    },
    'Simple not match 3': {
        b: 0b100000100,
        m: 0b100100100,
        r: false
    },
    'Simple not match 4': {
        b: 0b010000010,
        m: 0b010010010,
        r: false
    },
    'Simple not match 5': {
        b: 0b000010100,
        m: 0b100010100,
        r: false
    },
    'Not match 1': {
        b: 0b110100100,
        m: 0b111000000,
        r: false
    },
    'Not match 2': {
        b: 0b110101000,
        m: 0b000111000,
        r: false
    },
    'Not match 3': {
        b: 0b100011100,
        m: 0b100100100,
        r: false
    },
    'Not match 4': {
        b: 0b011000010,
        m: 0b010010010,
        r: false
    },
    'Not match 5': {
        b: 0b000000000,
        m: 0b100010100,
        r: false
    }
} as {
    [key: string]: {
        b: number;
        m: number;
        r: boolean;
    };
};
describe('matchMask', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { b, m, r } = cases[test];
        it(test, () => {
            expect(matchMask(b, m)).toBe(r);
        });
    }
});

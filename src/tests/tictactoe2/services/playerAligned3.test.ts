import { playerAligned3 } from 'src/libs/services/tictactoe2';
import { describe, expect, it } from 'vitest';

const cases = {
    'Row 1 - Simple': {
        p: 0b111000000,
        result: true
    },
    'Row 2': {
        p: 0b100111010,
        result: true
    },
    'Row 3 + NW/SE': {
        p: 0b100010111,
        result: true
    },
    'None 1': {
        p: 0b100010100,
        result: false
    },
    'None 2': {
        p: 0b010011001,
        result: false
    },
    'None 3': {
        p: 0b001011010,
        result: false
    }
} as {
    [key: string]: {
        p: number;
        result: boolean;
    };
};

describe('playerAligned3', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { p, result } = cases[test];
        it(test, () => {
            expect(playerAligned3(p)).toBe(result);
        });
    }
});

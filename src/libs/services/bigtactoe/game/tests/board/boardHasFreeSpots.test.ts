import { boardHasFreeSpots } from 'src/libs/services/bigtactoe';
import { describe, expect, it } from 'vitest';

const cases = {
    'Full 1': {
        player: 0b111000000,
        comput: 0b000111111,
        result: false
    },
    'Full 2': {
        player: 0b101010101,
        comput: 0b010101010,
        result: false
    },
    'Full with invalid plays': {
        player: 0b101010101,
        comput: 0b110101010,
        result: false
    },
    '1 spot free': {
        player: 0b111000000,
        comput: 0b000101111,
        result: true
    },
    '2 spots free': {
        player: 0b101000101,
        comput: 0b000101010,
        result: true
    },
    '1 spot free with invalid  plays': {
        player: 0b101010101,
        comput: 0b100101010,
        result: true
    }
} as {
    [key: string]: {
        player: number;
        comput: number;
        result: boolean;
    };
};
describe('boardHasFreeSpots', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { player, comput, result } = cases[test];
        it(test, () => {
            expect(boardHasFreeSpots({ player, computer: comput })).toBe(result);
        });
    }
});

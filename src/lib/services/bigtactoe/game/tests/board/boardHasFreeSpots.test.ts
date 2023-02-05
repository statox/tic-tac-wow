import { boardHasFreeSpots } from '$lib/services/bigtactoe';
import { describe, expect, it } from 'vitest';

const cases = {
    'Full 1': {
        board: '1212121212121212',
        result: false
    },
    'Full with invalid plays': {
        board: '1111111111111111',
        result: false
    },
    '1 spot free': {
        board: '1212012121212121',
        result: true
    },
    '2 spots free': {
        board: '1212012121012121',
        result: true
    },
    '1 spot free with invalid  plays': {
        board: '1111011111111111',
        result: true
    }
} as {
    [key: string]: {
        board: string;
        result: boolean;
    };
};
describe('boardHasFreeSpots', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { board, result } = cases[test];
        it(test, () => {
            expect(boardHasFreeSpots([...board].map(Number))).toBe(result);
        });
    }
});

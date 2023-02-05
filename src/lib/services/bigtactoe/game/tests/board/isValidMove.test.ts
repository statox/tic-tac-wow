import { isValidMove } from '$lib/services/bigtactoe';
import { describe, expect, it } from 'vitest';
import { R1_C1_INDEX, R1_C2_INDEX } from '$lib/services/bigtactoe';

const cases = {
    'Valid 1': {
        board: '0110000000000000',
        move: R1_C1_INDEX,
        result: true
    },
    'Invalid 4': {
        board: '0110000000000000',
        move: R1_C2_INDEX,
        result: false
    }
} as {
    [key: string]: {
        board: string;
        move: number;
        result: boolean;
    };
};
describe('isValidMove', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { board, move, result } = cases[test];
        it(test, () => {
            expect(isValidMove([...board].map(Number), move)).toBe(result);
        });
    }
});

import { isValidBoard } from 'src/libs/services/bigtactoe';
import { describe, expect, it } from 'vitest';

const cases = {
    'Valid 1': {
        board: '1000201102202100',
        result: true
    },
    'Valid 2': {
        board: '0112020110222000',
        result: true
    },
    'Valid 3': {
        board: '2211010212112102',
        result: true
    },
    'Invalid 1': {
        board: '1110002222200000',
        result: false
    },
    'Invalid 2': {
        board: '1000102012001001',
        result: false
    }
} as {
    [key: string]: {
        board: string;
        result: boolean;
    };
};
describe('isValidBoard', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { board, result } = cases[test];
        it(test, () => {
            expect(isValidBoard([...board].map(Number))).toBe(result);
        });
    }
});

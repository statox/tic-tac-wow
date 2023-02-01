import { getBoardFreeSpots } from 'src/libs/services/bigtactoe';
import { describe, expect, it } from 'vitest';

const cases = {
    'empty board': {
        board: '0000000000000000',
        result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    'only one piece in first position': {
        board: '1000000000000000',
        result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    'only one piece in position 3': {
        board: '0020000000000000',
        result: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    'only one piece in last position': {
        board: '0000000000000001',
        result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    },
    '4 available - 1': {
        board: '1220101201120111',
        result: [3, 5, 8, 12]
    },
    '4 available - 2': {
        board: '1021011211021101',
        result: [1, 4, 10, 14]
    },
    '0 available': {
        board: '1212121212121212',
        result: []
    }
} as {
    [key: string]: {
        board: string;
        result: number[];
    };
};

describe('getBoardFreeSpots', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { board, result } = cases[test];
        it(test, () => {
            expect(getBoardFreeSpots([...board].map(Number)).sort((a, b) => a - b)).toStrictEqual(
                result.sort((a, b) => a - b)
            );
        });
    }
});

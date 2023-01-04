import { getGridCellLastValue } from 'src/libs/services/game/check';
import { describe, expect, it } from 'vitest';
import { convertFixtureGridToGame } from '../helpers';

describe('getGridCellLastValue', () => {
    it('Should compare the last value of each stack', () => {
        const game = convertFixtureGridToGame([
            [[1], [-1], [2]],
            [
                [-1, 2],
                [2, -3],
                [-2, 3]
            ],
            [[], [1, 2, 3], []]
        ]);
        const tests = [
            { x: 0, y: 0, expected: 1 },
            { x: 1, y: 0, expected: 1 },
            { x: 2, y: 0, expected: 2 },

            { x: 0, y: 1, expected: 2 },
            { x: 1, y: 1, expected: 3 },
            { x: 2, y: 1, expected: 3 },

            { x: 0, y: 2, expected: 0 },
            { x: 1, y: 2, expected: 3 },
            { x: 2, y: 2, expected: 0 }
        ];

        for (const test of tests) {
            expect(getGridCellLastValue(game.grid, test.x, test.y)).toBe(test.expected);
        }

        expect(() => getGridCellLastValue(game.grid, -1, 0)).toThrowError(
            'Invalid coordinates -1,0'
        );
    });
});

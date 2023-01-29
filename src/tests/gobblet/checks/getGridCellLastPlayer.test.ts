import { getGridCellLastPlayer } from 'src/libs/services/gobblet/check';
import { describe, expect, it } from 'vitest';
import { convertFixtureGridToGame } from '../helpers';

describe('getGridCellLastPlayer', () => {
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
            { x: 1, y: 0, expected: 2 },
            { x: 2, y: 0, expected: 1 },

            { x: 0, y: 1, expected: 1 },
            { x: 1, y: 1, expected: 2 },
            { x: 2, y: 1, expected: 1 },

            { x: 0, y: 2, expected: null },
            { x: 1, y: 2, expected: 1 },
            { x: 2, y: 2, expected: null }
        ];

        for (const test of tests) {
            expect(getGridCellLastPlayer(game.grid, test.x, test.y)).toBe(test.expected);
        }

        expect(() => getGridCellLastPlayer(game.grid, -1, 0)).toThrowError(
            'Invalid coordinates -1,0'
        );
    });
});

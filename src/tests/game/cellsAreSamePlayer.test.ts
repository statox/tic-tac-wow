import { cellsAreSamePlayer } from 'src/libs/services/game/check';
import { describe, expect, it } from 'vitest';

import { convertFixtureGridToGame } from './helpers';

describe('cellsAreSamePlayer', () => {
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
            { x1: 0, y1: 0, x2: 1, y2: 0, expected: false },
            { x1: 0, y1: 0, x2: 2, y2: 0, expected: true },
            { x1: 0, y1: 0, x2: 0, y2: 1, expected: true },
            { x1: 0, y1: 1, x2: 2, y2: 1, expected: true },
            { x1: 0, y1: 0, x2: 1, y2: 2, expected: true },
            { x1: 0, y1: 0, x2: 0, y2: 2, expected: false },
            { x1: 0, y1: 2, x2: 2, y2: 2, expected: false }
        ];

        for (const test of tests) {
            expect(
                cellsAreSamePlayer(
                    game.grid,
                    { x: test.x1, y: test.y1 },
                    { x: test.x2, y: test.y2 }
                )
            ).toBe(test.expected);
        }
    });
});

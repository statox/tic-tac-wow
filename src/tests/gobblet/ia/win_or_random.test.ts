import { makeWinningMoveOrRandom } from 'src/libs/services/gobblet/ia';
import { describe, expect, it } from 'vitest';
import { convertFixtureGridToGame } from '../helpers';

describe('makeWinningMoveOrRandom', () => {
    it('should pick an easy winning move', () => {
        const game = convertFixtureGridToGame([
            [[1], [-1], []],
            [[-1, 2], [], []],
            [[], [], []]
        ]);

        game.player1.unselectableIndexes = new Set([1, 2, 3, 4, 5]);
        makeWinningMoveOrRandom(game, game.player1);
        expect(game.grid[2][0]).toHaveLength(1);
        expect(game.grid[2][0][0]).toBe(1);
    });

    it('should pick a winning move with the right piece', () => {
        const game = convertFixtureGridToGame([
            [[1], [], []],
            [[1, -2], [], []],
            [[-2], [], [3]]
        ]);
        game.state.player = 2;

        game.player2.unselectableIndexes = new Set([0, 2, 4, 5]);
        makeWinningMoveOrRandom(game, game.player2);
        expect(game.grid[0][0]).toHaveLength(2);
        expect(game.grid[0][0][1]).toBe(-2);
    });
});

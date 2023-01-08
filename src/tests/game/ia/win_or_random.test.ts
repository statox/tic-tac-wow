import { makeWinningMoveOrRandom } from 'src/libs/services/game/ia';
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

    // it('should pick a winning move with the right piece', () => {
    //     const game = convertFixtureGridToGame([
    //         [[1], [], []],
    //         [[-1, 2], [], []],
    //         [[-1], [], [-3]]
    //     ]);
    //     printGameGrid(game, 'first');

    //     game.player1.pieces = [
    //         { value: 1, selected: false },
    //         { value: 2, selected: false }
    //     ];
    //     makeWinningMoveOrRandom(game, game.player1);
    //     expect(game.grid[2][0]).toHaveLength(2);
    //     expect(game.grid[2][0][1]?.value).toBe(2);
    // });
});

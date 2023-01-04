import { describe, expect, it } from 'vitest';
import { getNewGame } from '../../libs/services/game';
import { convertFixtureGridAndHandsToGame } from './helpers';

describe('getNewGame', () => {
    it('Should return a properly formated game', () => {
        const game = getNewGame();
        expect(game.grid).toHaveLength(3);
        expect(game.grid[0]).toHaveLength(3);
        expect(game.state.player).toBe(1);
        for (const player of [game.player1, game.player2]) {
            expect(player.pieces).toHaveLength(6);
            expect(player.pieces.map((v) => v.selected).filter((v) => v === true)).toHaveLength(0);
        }
        expect(game.player1.pieces.map((v) => v.value)).toEqual([1, 1, 2, 2, 3, 3]);
        expect(game.player2.pieces.map((v) => v.value)).toEqual([-1, -1, -2, -2, -3, -3]);
    });
});

describe('convertFixtureGridAndHandsToGame', () => {
    it('Should return a properly formated game', () => {
        const game = convertFixtureGridAndHandsToGame(
            [
                [[2, 3], [2], []],
                [[], [], [-3]],
                [[], [], [-3]]
            ],
            [1, 1, 2],
            [-1, -1, -2]
        );

        expect(game.player1.pieces.map((v) => v.value)).toEqual([1, 1, 2]);
        expect(game.player2.pieces.map((v) => v.value)).toEqual([-1, -1, -2]);
        expect(game.grid[0][0]).toHaveLength(2);
        expect(game.grid[0][0].map((v) => v.value)).toEqual([2, 3]);
        expect(game.grid[0][1].map((v) => v.value)).toEqual([2]);
        expect(game.grid[0][2].map((v) => v.value)).toHaveLength(0);
    });
});

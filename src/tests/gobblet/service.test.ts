import { describe, expect, it } from 'vitest';
import { getNewGame } from '../../libs/services/gobblet';
import { convertFixtureGridAndHandsToGame, convertFixtureGridToGame } from './helpers';

describe('getNewGame', () => {
    it('Should return a properly formated game', () => {
        const game = getNewGame();
        expect(game.grid).toHaveLength(3);
        expect(game.grid[0]).toHaveLength(3);
        expect(game.state.player).toBe(1);
        expect(game.player1.pieces).toEqual([1, 1, 2, 2, 3, 3]);
        expect(game.player2.pieces).toEqual([-1, -1, -2, -2, -3, -3]);
        expect(game.player1.unselectableIndexes).toEqual(new Set<number>());
        expect(game.player2.unselectableIndexes).toEqual(new Set<number>());
        expect(game.player1.selectedPiece).toBeNull();
        expect(game.player2.selectedPiece).toBeNull();
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

        expect(game.player1.pieces).toEqual([1, 1, 2]);
        expect(game.player2.pieces).toEqual([-1, -1, -2]);
        expect(game.grid[0][0]).toHaveLength(2);
        expect(game.grid[0][0]).toEqual([2, 3]);
        expect(game.grid[0][1]).toEqual([2]);
        expect(game.grid[0][2]).toHaveLength(0);
    });
});

describe('convertFixtureGridToGame', () => {
    it('Should return a properly formated game', () => {
        const game = convertFixtureGridToGame([
            [[2, 3], [2], []],
            [[], [], [-3]],
            [[], [], [-3]]
        ]);

        expect(game.player1.pieces).toEqual([1, 1, 2, 2, 3, 3]);
        expect(game.player2.pieces).toEqual([-1, -1, -2, -2, -3, -3]);
        expect(game.grid[0][0]).toHaveLength(2);
        expect(game.grid[0][0]).toEqual([2, 3]);
        expect(game.grid[0][1]).toEqual([2]);
        expect(game.grid[0][2]).toHaveLength(0);
    });
});

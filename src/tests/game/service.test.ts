import { describe, expect, it } from 'vitest';
import { getNewGame } from '../../libs/services/game';

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

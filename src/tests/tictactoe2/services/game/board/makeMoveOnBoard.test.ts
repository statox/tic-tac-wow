import { makeMoveOnBoard, Player, xyToIndex } from 'src/libs/services/tictactoe2';
import { describe, expect, it } from 'vitest';

describe('makeMoveOnBoard', () => {
    it('Should work', () => {
        const board = {
            player: 0b000000000,
            computer: 0b000000000
        };

        makeMoveOnBoard(board, Player.player, xyToIndex({ x: 0, y: 0 }));
        expect(board.player).toBe(0b100000000);
        expect(board.computer).toBe(0b000000000);

        makeMoveOnBoard(board, Player.computer, xyToIndex({ x: 1, y: 0 }));
        expect(board.player).toBe(0b100000000);
        expect(board.computer).toBe(0b010000000);

        makeMoveOnBoard(board, Player.player, xyToIndex({ x: 2, y: 0 }));
        expect(board.player).toBe(0b101000000);
        expect(board.computer).toBe(0b010000000);

        makeMoveOnBoard(board, Player.computer, xyToIndex({ x: 1, y: 1 }));
        expect(board.player).toBe(0b101000000);
        expect(board.computer).toBe(0b010010000);

        expect(() => makeMoveOnBoard(board, Player.computer, xyToIndex({ x: 1, y: 1 }))).toThrow();
        expect(() => makeMoveOnBoard(board, Player.player, xyToIndex({ x: 1, y: 1 }))).toThrow();

        expect(() => makeMoveOnBoard(board, Player.computer, xyToIndex({ x: 0, y: 0 }))).toThrow();
        expect(() => makeMoveOnBoard(board, Player.player, xyToIndex({ x: 0, y: 0 }))).toThrow();
    });
});

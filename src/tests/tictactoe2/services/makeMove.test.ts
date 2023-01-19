import { makeMoveOnBoard, Player } from 'src/libs/services/tictactoe2';
import { describe, expect, it } from 'vitest';

describe('makeMoveOnBoard', () => {
    it('Should work', () => {
        const board = {
            player: 0b000000000,
            computer: 0b000000000
        };

        makeMoveOnBoard(board, Player.player, { x: 0, y: 0 });
        expect(board.player).toBe(0b100000000);
        expect(board.computer).toBe(0b000000000);

        makeMoveOnBoard(board, Player.computer, { x: 1, y: 0 });
        expect(board.player).toBe(0b100000000);
        expect(board.computer).toBe(0b010000000);

        makeMoveOnBoard(board, Player.player, { x: 2, y: 0 });
        expect(board.player).toBe(0b101000000);
        expect(board.computer).toBe(0b010000000);

        makeMoveOnBoard(board, Player.computer, { x: 1, y: 1 });
        expect(board.player).toBe(0b101000000);
        expect(board.computer).toBe(0b010010000);

        expect(() => makeMoveOnBoard(board, Player.computer, { x: 1, y: 1 })).toThrow();
        expect(() => makeMoveOnBoard(board, Player.player, { x: 1, y: 1 })).toThrow();

        expect(() => makeMoveOnBoard(board, Player.computer, { x: 0, y: 0 })).toThrow();
        expect(() => makeMoveOnBoard(board, Player.player, { x: 0, y: 0 })).toThrow();
    });
});

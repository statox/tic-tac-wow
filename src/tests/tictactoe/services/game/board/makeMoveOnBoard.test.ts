import { makeMoveOnBoard, Player } from 'src/libs/services/tictactoe';
import { describe, expect, it } from 'vitest';
import { CENTER_INDEX, TOP_INDEX, TOP_LEFT_INDEX, TOP_RIGHT_INDEX } from '../helpers';

describe('makeMoveOnBoard', () => {
    it('Should work', () => {
        const board = {
            player: 0b000000000,
            computer: 0b000000000
        };

        makeMoveOnBoard(board, Player.player, TOP_LEFT_INDEX);
        expect(board.player).toBe(0b100000000);
        expect(board.computer).toBe(0b000000000);

        makeMoveOnBoard(board, Player.computer, TOP_INDEX);
        expect(board.player).toBe(0b100000000);
        expect(board.computer).toBe(0b010000000);

        makeMoveOnBoard(board, Player.player, TOP_RIGHT_INDEX);
        expect(board.player).toBe(0b101000000);
        expect(board.computer).toBe(0b010000000);

        makeMoveOnBoard(board, Player.computer, CENTER_INDEX);
        expect(board.player).toBe(0b101000000);
        expect(board.computer).toBe(0b010010000);

        expect(() => makeMoveOnBoard(board, Player.computer, CENTER_INDEX)).toThrow();
        expect(() => makeMoveOnBoard(board, Player.player, CENTER_INDEX)).toThrow();

        expect(() => makeMoveOnBoard(board, Player.computer, TOP_LEFT_INDEX)).toThrow();
        expect(() => makeMoveOnBoard(board, Player.player, TOP_LEFT_INDEX)).toThrow();
    });
});

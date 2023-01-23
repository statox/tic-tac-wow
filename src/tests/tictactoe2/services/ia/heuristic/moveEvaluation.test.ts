import { getNewBoard } from 'src/libs/services/tictactoe2';
import { Player } from 'src/libs/services/tictactoe2';
import { moveBlockedOpponent } from 'src/libs/services/tictactoe2/ia/heuristic/moveEvaluation';
import { describe, expect, it } from 'vitest';

describe('moveBlockedOpponent', () => {
    it('Should detect center blocks when it is the last move', () => {
        const board = getNewBoard();
        board.player = 0b100010100;
        board.computer = 0b000101101;

        expect(moveBlockedOpponent(board, Player.player, { x: 1, y: 1 })).toBe(true);
        expect(moveBlockedOpponent(board, Player.computer, { x: 2, y: 1 })).toBe(false);

        board.player = 0b110000110;
        board.computer = 0b000011101;

        expect(moveBlockedOpponent(board, Player.computer, { x: 1, y: 1 })).toBe(true);
        expect(moveBlockedOpponent(board, Player.player, { x: 0, y: 2 })).toBe(false);
    });

    it('Should detect corner blocks when it is the last move', () => {
        const board = getNewBoard();
        board.player = 0b000100001;
        board.computer = 0b101001000;

        expect(moveBlockedOpponent(board, Player.player, { x: 2, y: 2 })).toBe(true);
        expect(moveBlockedOpponent(board, Player.computer, { x: 0, y: 0 })).toBe(false);

        board.player = 0b011010000;
        board.computer = 0b100100000;

        expect(moveBlockedOpponent(board, Player.computer, { x: 0, y: 0 })).toBe(true);
        expect(moveBlockedOpponent(board, Player.player, { x: 1, y: 0 })).toBe(false);
    });

    it('Should detect edge blocks when it is the last move', () => {
        const board = getNewBoard();
        board.player = 0b110000010;
        board.computer = 0b000000101;

        expect(moveBlockedOpponent(board, Player.player, { x: 1, y: 2 })).toBe(true);
        expect(moveBlockedOpponent(board, Player.computer, { x: 0, y: 2 })).toBe(false);

        board.player = 0b000011000;
        board.computer = 0b000100001;

        expect(moveBlockedOpponent(board, Player.computer, { x: 0, y: 1 })).toBe(true);
        expect(moveBlockedOpponent(board, Player.player, { x: 2, y: 1 })).toBe(false);
    });
});

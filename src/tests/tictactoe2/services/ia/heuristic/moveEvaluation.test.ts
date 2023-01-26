import { getNewBoard } from 'src/libs/services/tictactoe2';
import { Player } from 'src/libs/services/tictactoe2';
import {
    moveBlockedOpponent,
    moveCreatedFork
} from 'src/libs/services/tictactoe2/ia/heuristic/moveEvaluation';
import { describe, expect, it } from 'vitest';

const CENTER = { x: 1, y: 1 };
const TOP_LEFT = { x: 0, y: 0 };
const LEFT = { x: 0, y: 1 };
const TOP = { x: 1, y: 0 };
const MIDDLE_RIGHT = { x: 2, y: 1 };
const BOTTOM_LEFT = { x: 0, y: 2 };
const BOTTOM = { x: 1, y: 2 };
const BOTTOM_RIGHT = { x: 2, y: 2 };

describe('moveBlockedOpponent', () => {
    it('Should detect center blocks when it is the last move', () => {
        const board = getNewBoard();
        board.player = 0b100010100;
        board.computer = 0b000101101;

        expect(moveBlockedOpponent(board, Player.player, CENTER)).toBe(true);
        expect(moveBlockedOpponent(board, Player.computer, MIDDLE_RIGHT)).toBe(false);

        board.player = 0b110000110;
        board.computer = 0b000011101;

        expect(moveBlockedOpponent(board, Player.computer, CENTER)).toBe(true);
        expect(moveBlockedOpponent(board, Player.player, BOTTOM_LEFT)).toBe(false);

        board.player = 0b001011000;
        board.computer = 0b000100101;

        board.player = 0b001010000;
        board.computer = 0b000000100;

        expect(moveBlockedOpponent(board, Player.computer, BOTTOM_LEFT)).toBe(true);
    });

    it('Should detect corner blocks when it is the last move', () => {
        const board = getNewBoard();
        board.player = 0b000100001;
        board.computer = 0b101001000;

        expect(moveBlockedOpponent(board, Player.player, BOTTOM_RIGHT)).toBe(true);
        expect(moveBlockedOpponent(board, Player.computer, TOP_LEFT)).toBe(false);

        board.player = 0b011010000;
        board.computer = 0b100100000;

        expect(moveBlockedOpponent(board, Player.computer, TOP_LEFT)).toBe(true);
        expect(moveBlockedOpponent(board, Player.player, TOP)).toBe(false);
    });

    it('Should detect edge blocks when it is the last move', () => {
        const board = getNewBoard();
        board.player = 0b110000010;
        board.computer = 0b000000101;

        expect(moveBlockedOpponent(board, Player.player, BOTTOM)).toBe(true);
        expect(moveBlockedOpponent(board, Player.computer, BOTTOM_LEFT)).toBe(false);

        board.player = 0b000011000;
        board.computer = 0b000100001;

        expect(moveBlockedOpponent(board, Player.computer, LEFT)).toBe(true);
        expect(moveBlockedOpponent(board, Player.player, MIDDLE_RIGHT)).toBe(false);
    });

    it('Should not detect random non block moves', () => {
        const board = getNewBoard();
        board.player = 0b000011100;
        board.computer = 0b000100011;

        expect(moveBlockedOpponent(board, Player.computer, BOTTOM)).toBe(false);
    });
});

describe('moveCreatedFork', () => {
    it('Should detect center blocks when it is the last move', () => {
        const board = getNewBoard();

        // Center -- middle column, middle row
        board.player = 0b010011000;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, CENTER)).toBe(true);
        board.computer = 0b100000010;
        expect(moveCreatedFork(board, Player.player, CENTER)).toBe(false);

        // Center -- NESW, middle row
        board.player = 0b100000000;
        board.computer = 0b000110100;
        expect(moveCreatedFork(board, Player.computer, CENTER)).toBe(true);
        board.player = 0b000001000;
        expect(moveCreatedFork(board, Player.computer, CENTER)).toBe(false);

        // Center -- middle colum, NWSE
        board.player = 0b010010001;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, CENTER)).toBe(true);
        board.computer = 0b000000010;
        expect(moveCreatedFork(board, Player.player, CENTER)).toBe(false);
    });

    it('Should detect corner blocks when it is the last move', () => {
        const board = getNewBoard();

        // Corner -- bottom row x.x right colum .xx
        board.player = 0b000001101;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, BOTTOM_RIGHT)).toBe(true);
        board.computer = 0b000000010;
        expect(moveCreatedFork(board, Player.player, BOTTOM_RIGHT)).toBe(false);

        // Corner -- bottom row .xx right colum x.x
        board.player = 0b001000011;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, BOTTOM_RIGHT)).toBe(true);
        board.computer = 0b000001000;
        expect(moveCreatedFork(board, Player.player, BOTTOM_RIGHT)).toBe(false);
    });

    it('Should detect edge blocks when it is the last move', () => {
        const board = getNewBoard();

        // Edge -- bottom row xx. middle colum .xx
        board.player = 0b000010110;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, BOTTOM)).toBe(true);
        board.computer = 0b010000000;
        expect(moveCreatedFork(board, Player.player, BOTTOM)).toBe(false);

        // Edge -- bottom row .xx middle colum x.x
        board.player = 0b010000011;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, BOTTOM)).toBe(true);
        board.computer = 0b000000100;
        expect(moveCreatedFork(board, Player.player, BOTTOM)).toBe(false);
    });
});

import { getNewBoard } from 'src/libs/services/tictactoe';
import { Player } from 'src/libs/services/tictactoe';
import {
    moveBlockedOpponent,
    moveCreatedFork
} from 'src/libs/services/tictactoe/ia/heuristic/moveEvaluation';
import { describe, expect, it } from 'vitest';
import {
    BOTTOM_INDEX,
    BOTTOM_LEFT_INDEX,
    BOTTOM_RIGHT_INDEX,
    CENTER_INDEX,
    LEFT_INDEX,
    RIGHT_INDEX,
    TOP_INDEX,
    TOP_LEFT_INDEX
} from '../../game/helpers';

describe('moveBlockedOpponent', () => {
    it('Should detect center blocks when it is the last move', () => {
        const board = getNewBoard();
        board.player = 0b100010100;
        board.computer = 0b000101101;

        expect(moveBlockedOpponent(board, Player.player, CENTER_INDEX)).toBe(true);
        expect(moveBlockedOpponent(board, Player.computer, RIGHT_INDEX)).toBe(false);

        board.player = 0b110000110;
        board.computer = 0b000011101;

        expect(moveBlockedOpponent(board, Player.computer, CENTER_INDEX)).toBe(true);
        expect(moveBlockedOpponent(board, Player.player, BOTTOM_LEFT_INDEX)).toBe(false);

        board.player = 0b001011000;
        board.computer = 0b000100101;

        board.player = 0b001010000;
        board.computer = 0b000000100;

        expect(moveBlockedOpponent(board, Player.computer, BOTTOM_LEFT_INDEX)).toBe(true);
    });

    it('Should detect corner blocks when it is the last move', () => {
        const board = getNewBoard();
        board.player = 0b000100001;
        board.computer = 0b101001000;

        expect(moveBlockedOpponent(board, Player.player, BOTTOM_RIGHT_INDEX)).toBe(true);
        expect(moveBlockedOpponent(board, Player.computer, TOP_LEFT_INDEX)).toBe(false);

        board.player = 0b011010000;
        board.computer = 0b100100000;

        expect(moveBlockedOpponent(board, Player.computer, TOP_LEFT_INDEX)).toBe(true);
        expect(moveBlockedOpponent(board, Player.player, TOP_INDEX)).toBe(false);
    });

    it('Should detect edge blocks when it is the last move', () => {
        const board = getNewBoard();
        board.player = 0b110000010;
        board.computer = 0b000000101;

        expect(moveBlockedOpponent(board, Player.player, BOTTOM_INDEX)).toBe(true);
        expect(moveBlockedOpponent(board, Player.computer, BOTTOM_LEFT_INDEX)).toBe(false);

        board.player = 0b000011000;
        board.computer = 0b000100001;

        expect(moveBlockedOpponent(board, Player.computer, LEFT_INDEX)).toBe(true);
        expect(moveBlockedOpponent(board, Player.player, RIGHT_INDEX)).toBe(false);
    });

    it('Should not detect random non block moves', () => {
        const board = getNewBoard();
        board.player = 0b000011100;
        board.computer = 0b000100011;

        expect(moveBlockedOpponent(board, Player.computer, BOTTOM_INDEX)).toBe(false);
    });
});

describe('moveCreatedFork', () => {
    it('Should detect center blocks when it is the last move', () => {
        const board = getNewBoard();

        // Center -- middle column, middle row
        board.player = 0b010011000;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, CENTER_INDEX)).toBe(true);
        board.computer = 0b100000010;
        expect(moveCreatedFork(board, Player.player, CENTER_INDEX)).toBe(false);

        // Center -- NESW, middle row
        board.player = 0b100000000;
        board.computer = 0b000110100;
        expect(moveCreatedFork(board, Player.computer, CENTER_INDEX)).toBe(true);
        board.player = 0b000001000;
        expect(moveCreatedFork(board, Player.computer, CENTER_INDEX)).toBe(false);

        // Center -- middle colum, NWSE
        board.player = 0b010010001;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, CENTER_INDEX)).toBe(true);
        board.computer = 0b000000010;
        expect(moveCreatedFork(board, Player.player, CENTER_INDEX)).toBe(false);
    });

    it('Should detect corner blocks when it is the last move', () => {
        const board = getNewBoard();

        // Corner -- bottom row x.x right colum .xx
        board.player = 0b000001101;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, BOTTOM_RIGHT_INDEX)).toBe(true);
        board.computer = 0b000000010;
        expect(moveCreatedFork(board, Player.player, BOTTOM_RIGHT_INDEX)).toBe(false);

        // Corner -- bottom row .xx right colum x.x
        board.player = 0b001000011;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, BOTTOM_RIGHT_INDEX)).toBe(true);
        board.computer = 0b000001000;
        expect(moveCreatedFork(board, Player.player, BOTTOM_RIGHT_INDEX)).toBe(false);
    });

    it('Should detect edge blocks when it is the last move', () => {
        const board = getNewBoard();

        // Edge -- bottom row xx. middle colum .xx
        board.player = 0b000010110;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, BOTTOM_INDEX)).toBe(true);
        board.computer = 0b010000000;
        expect(moveCreatedFork(board, Player.player, BOTTOM_INDEX)).toBe(false);

        // Edge -- bottom row .xx middle colum x.x
        board.player = 0b010000011;
        board.computer = 0b000000000;
        expect(moveCreatedFork(board, Player.player, BOTTOM_INDEX)).toBe(true);
        board.computer = 0b000000100;
        expect(moveCreatedFork(board, Player.player, BOTTOM_INDEX)).toBe(false);
    });
});

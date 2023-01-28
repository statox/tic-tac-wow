import { getNewBoard, makeMoveOnBoard } from 'src/libs/services/tictactoe2';
import { Player } from 'src/libs/services/tictactoe2';
import { getPossibleMoves, getUniquePossibleMoves } from 'src/libs/services/tictactoe2/ia/helpers';
import { describe, expect, it } from 'vitest';
import { CENTER_INDEX } from '../../game/helpers';

describe('moves functions for ia', () => {
    it('getPossibleMoves should return all moves for the first two steps', () => {
        const board = getNewBoard();
        const playerMoves = getPossibleMoves(board, Player.player);

        expect(playerMoves).toHaveLength(9);
        expect(playerMoves.filter((move) => move.board.computer !== 0)).toHaveLength(0);
        expect(playerMoves.map((move) => move.board.player)).toStrictEqual([
            1, 2, 4, 8, 16, 32, 64, 128, 256
        ]);

        makeMoveOnBoard(board, Player.player, CENTER_INDEX);
        const computerMoves = getPossibleMoves(board, Player.player);
        expect(computerMoves).toHaveLength(8);
    });

    it('getUniquePossibleMoves should return deduped moves for first two steps', () => {
        const board = getNewBoard();
        const playerMoves = getUniquePossibleMoves(board, Player.player);

        expect(playerMoves).toHaveLength(3);
        expect(playerMoves.filter((move) => move.board.computer !== 0)).toHaveLength(0);
        expect(playerMoves.map((move) => move.board.player)).toStrictEqual([1, 2, 16]);

        makeMoveOnBoard(board, Player.player, CENTER_INDEX);
        const computerMoves = getUniquePossibleMoves(board, Player.player);
        expect(computerMoves).toHaveLength(2);
    });

    it('getUniquePossibleMoves should return deduped moves for more complex steps', () => {
        const board = getNewBoard();
        board.player = 0b100000000;
        board.computer = 0b000010001;
        const playerMoves = getPossibleMoves(board, Player.player);
        const playerMovesDedup = getUniquePossibleMoves(board, Player.player);

        //dedup
        // x.x  and x..
        // .o.      .o.
        // ..o      x.o
        expect(playerMoves).toHaveLength(6);
        expect(playerMovesDedup).toHaveLength(5);
    });
});

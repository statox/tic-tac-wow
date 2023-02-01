import {
    getNewBoard,
    getPlayerPiecesFromBoard,
    makeMoveOnBoard,
    Player
} from 'src/libs/services/bigtactoe';
import { describe, expect, it } from 'vitest';
import { R1_C1_INDEX, R2_C2_INDEX } from 'src/libs/services/bigtactoe';

describe('makeMoveOnBoard', () => {
    it('Should work', () => {
        const board = getNewBoard();

        makeMoveOnBoard(board, Player.player, R1_C1_INDEX);
        expect(getPlayerPiecesFromBoard(board, Player.player)).toStrictEqual([R1_C1_INDEX]);
        expect(getPlayerPiecesFromBoard(board, Player.computer)).toStrictEqual([]);

        makeMoveOnBoard(board, Player.computer, R2_C2_INDEX);
        expect(getPlayerPiecesFromBoard(board, Player.player)).toStrictEqual([R1_C1_INDEX]);
        expect(getPlayerPiecesFromBoard(board, Player.computer)).toStrictEqual([R2_C2_INDEX]);

        expect(() => makeMoveOnBoard(board, Player.computer, R1_C1_INDEX)).toThrow();
    });
});

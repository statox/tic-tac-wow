import { getNewBoard, getPlayerPiecesFromBoard, Player } from 'src/libs/services/bigtactoe';
import { describe, expect, it } from 'vitest';

describe('getPlayerPiecesFromBoard', () => {
    it('Should work', () => {
        let board = getNewBoard();

        expect(getPlayerPiecesFromBoard(board, Player.player)).toHaveLength(0);
        board = [0, 1, 1, 2, 0, 0, 0, 2, 0, 1, 0, 2, 0, 0, 1, 0];
        expect(getPlayerPiecesFromBoard(board, Player.player)).toStrictEqual([1, 2, 9, 14]);
        expect(getPlayerPiecesFromBoard(board, Player.computer)).toStrictEqual([3, 7, 11]);
    });
});

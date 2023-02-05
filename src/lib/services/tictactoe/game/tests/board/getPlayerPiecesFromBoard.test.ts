import { getNewBoard, getPlayerPiecesFromBoard, Player } from '$lib/services/tictactoe';
import { describe, expect, it } from 'vitest';

describe('getPlayerPiecesFromBoard', () => {
    it('Should work', () => {
        const board = getNewBoard();

        let player = getPlayerPiecesFromBoard(board, Player.player);
        expect(board.player).toBe(0b000000000);
        expect(player).toBe(0b000000000);
        player = 0b111111111;
        expect(player).toBe(0b111111111);
        expect(board.player).toBe(0b000000000);
    });
});

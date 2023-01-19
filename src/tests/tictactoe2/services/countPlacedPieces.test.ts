import { countPlacedPieces, Player } from 'src/libs/services/tictactoe2';
import { describe, expect, it } from 'vitest';

describe('countPlacedPieces', () => {
    it('Should count properly', () => {
        expect(countPlacedPieces(0b000000000)).toBe(0);
        expect(countPlacedPieces(0b000100000)).toBe(1);
        expect(countPlacedPieces(0b000000100)).toBe(1);
        expect(countPlacedPieces(0b100000000)).toBe(1);
        expect(countPlacedPieces(0b010100000)).toBe(2);
        expect(countPlacedPieces(0b001101000)).toBe(3);
        expect(countPlacedPieces(0b111111111)).toBe(9);
    });

    it('Should not modify the board', () => {
        const board = {
            player: 0b101010101,
            computer: 0b000011111
        };
        expect(countPlacedPieces(board.player)).toBe(5);
        expect(countPlacedPieces(board.computer)).toBe(5);

        expect(board.player).toBe(0b101010101);
        expect(board.computer).toBe(0b000011111);
    });
});

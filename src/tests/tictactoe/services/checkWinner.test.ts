import { checkWinner, GameResult } from 'src/libs/services/tictactoe';
import { describe, expect, it } from 'vitest';

describe('checkWinner', () => {
    it('should work', () => {
        const empty = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        expect(checkWinner(empty)).toBe(GameResult.NOT_OVER);

        const notOver = [
            [1, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        expect(checkWinner(notOver)).toBe(GameResult.NOT_OVER);

        const winnerRow1 = [
            [1, 1, 1],
            [0, 0, 0],
            [0, 0, 0]
        ];
        expect(checkWinner(winnerRow1)).toBe(GameResult.PLAYER);

        const winnerRow2 = [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ];
        expect(checkWinner(winnerRow2)).toBe(GameResult.PLAYER);

        const winnerRow3 = [
            [0, 0, 0],
            [0, 0, 0],
            [-1, -1, -1]
        ];
        expect(checkWinner(winnerRow3)).toBe(GameResult.COMPUTER);

        const winnerColumn1 = [
            [-1, 0, 0],
            [-1, 0, 0],
            [-1, 0, 0]
        ];
        expect(checkWinner(winnerColumn1)).toBe(GameResult.COMPUTER);

        const winnerColumn2 = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ];
        expect(checkWinner(winnerColumn2)).toBe(GameResult.PLAYER);

        const winnerColumn3 = [
            [0, 0, -1],
            [0, 0, -1],
            [0, 0, -1]
        ];
        expect(checkWinner(winnerColumn3)).toBe(GameResult.COMPUTER);

        const winnerNWSE = [
            [1, 0, -1],
            [0, 1, -1],
            [0, 0, 1]
        ];
        expect(checkWinner(winnerNWSE)).toBe(GameResult.PLAYER);

        const winnerNESW = [
            [1, 0, -1],
            [0, -1, -1],
            [-1, 0, 1]
        ];
        expect(checkWinner(winnerNESW)).toBe(GameResult.COMPUTER);

        const draw1 = [
            [1, 1, -1],
            [-1, -1, 1],
            [1, 1, -1]
        ];
        expect(checkWinner(draw1)).toBe(GameResult.DRAW);

        const draw2 = [
            [1, -1, 1],
            [1, -1, 1],
            [-1, 1, -1]
        ];
        expect(checkWinner(draw2)).toBe(GameResult.DRAW);
    });
});

import { describe, expect, it } from 'vitest';
import { BOTTOM_INDEX, getNewBoard, Player } from '$lib/services/tictactoe';
import { scoreMove } from '$lib/services/tictactoe/ia/strategies/hardcodedCompleteRules';

describe('scoreMove', () => {
    it('should work', () => {
        const board = getNewBoard();
        board.player = 0b101100001;
        board.computer = 0b000011110;

        expect(scoreMove(board, Player.computer, BOTTOM_INDEX).reason).toBe('take_edge');
    });
});

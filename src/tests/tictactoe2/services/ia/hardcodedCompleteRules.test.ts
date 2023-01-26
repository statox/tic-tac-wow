import { describe, expect, it } from 'vitest';
import { getNewBoard, Player } from 'src/libs/services/tictactoe2';
import { scoreMove } from 'src/libs/services/tictactoe2/ia/strategies/hardcodedCompleteRules';

const BOTTOM = { x: 1, y: 2 };

describe('scoreMove', () => {
    it('should work', () => {
        const board = getNewBoard();
        board.player = 0b101100001;
        board.computer = 0b000011110;

        expect(scoreMove(board, Player.computer, BOTTOM).reason).toBe('take_edge');
    });
});

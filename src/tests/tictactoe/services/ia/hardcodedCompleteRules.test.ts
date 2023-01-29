import { describe, expect, it } from 'vitest';
import { getNewBoard, Player } from 'src/libs/services/tictactoe';
import { scoreMove } from 'src/libs/services/tictactoe/ia/strategies/hardcodedCompleteRules';
import { BOTTOM_INDEX } from '../game/helpers';

describe('scoreMove', () => {
    it('should work', () => {
        const board = getNewBoard();
        board.player = 0b101100001;
        board.computer = 0b000011110;

        expect(scoreMove(board, Player.computer, BOTTOM_INDEX).reason).toBe('take_edge');
    });
});

import { getHandPossibleSelection } from 'src/libs/services/tictaccup/ia/helpers';
import { describe, expect, it } from 'vitest';
import { convertFixtureGridToGame } from '../../helpers';

describe('getHandPossibleSelection', () => {
    it('Should work', () => {
        const game = convertFixtureGridToGame([
            [[2, 3], [2], []],
            [[], [], [-3]],
            [[-1], [], [-3]]
        ]);
        game.player1.unselectableIndexes = new Set([2, 3, 4]);
        game.player2.unselectableIndexes = new Set([0, 4, 5]);

        const p1Selections = getHandPossibleSelection(game, game.player1);
        expect(p1Selections).toStrictEqual([
            { from: 'hand', index: 0 },
            { from: 'hand', index: 5 },
            { from: 'board', position: { x: 0, y: 0 } },
            { from: 'board', position: { x: 1, y: 0 } }
        ]);

        const p2Selections = getHandPossibleSelection(game, game.player2);
        expect(p2Selections).toStrictEqual([
            { from: 'hand', index: 1 },
            { from: 'hand', index: 2 },
            { from: 'board', position: { x: 2, y: 1 } },
            { from: 'board', position: { x: 0, y: 2 } },
            { from: 'board', position: { x: 2, y: 2 } }
        ]);
    });
});

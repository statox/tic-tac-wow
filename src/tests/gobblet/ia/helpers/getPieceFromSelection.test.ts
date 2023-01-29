import { getPieceFromSelection } from 'src/libs/services/gobblet/ia/helpers';
import { describe, expect, it } from 'vitest';
import { convertFixtureGridToGame } from '../../helpers';

describe('getPieceFromSelection', () => {
    it('Should work', () => {
        const game = convertFixtureGridToGame([
            [[2, 3], [], []],
            [[], [-1], []],
            [[], [], []]
        ]);

        expect(getPieceFromSelection(game, game.player1, { from: 'hand', index: 0 })).toBe(1);
        expect(getPieceFromSelection(game, game.player1, { from: 'hand', index: 1 })).toBe(1);
        expect(getPieceFromSelection(game, game.player2, { from: 'hand', index: 2 })).toBe(-2);
        expect(
            getPieceFromSelection(game, game.player2, { from: 'board', position: { x: 0, y: 0 } })
        ).toBe(3);
        expect(
            getPieceFromSelection(game, game.player2, { from: 'board', position: { x: 1, y: 1 } })
        ).toBe(-1);
        expect(
            getPieceFromSelection(game, game.player1, { from: 'board', position: { x: 0, y: 1 } })
        ).toBeUndefined();
    });
});

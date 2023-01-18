import { getHandsPossibleMoves } from 'src/libs/services/tictaccup/ia/helpers';
import { describe, expect, it } from 'vitest';
import { convertFixtureGridToGame } from '../../helpers';

describe('getHandsPossibleMoves', () => {
    it('Should work', () => {
        const game = convertFixtureGridToGame([
            [[1, 2, 3], [2], []],
            [[-1, -2, -3], [-2], []],
            [[3], [3], [3]]
        ]);
        // 1 1 2 2 3 3
        // 0 1 2 3 4 5
        game.player1.unselectableIndexes = new Set([0, 2, 3, 4]);
        game.player2.unselectableIndexes = new Set([0, 1, 3, 4]);

        const p1Moves = getHandsPossibleMoves(game, game.player1);
        expect(p1Moves).toStrictEqual([
            { from: { index: 1, from: 'hand' }, to: { x: 2, y: 0 } },
            { from: { index: 1, from: 'hand' }, to: { x: 2, y: 1 } },

            { from: { index: 5, from: 'hand' }, to: { x: 1, y: 0 } },
            { from: { index: 5, from: 'hand' }, to: { x: 2, y: 0 } },
            { from: { index: 5, from: 'hand' }, to: { x: 1, y: 1 } },
            { from: { index: 5, from: 'hand' }, to: { x: 2, y: 1 } },

            { from: { from: 'board', position: { x: 0, y: 0 } }, to: { x: 1, y: 0 } },
            { from: { from: 'board', position: { x: 0, y: 0 } }, to: { x: 2, y: 0 } },
            { from: { from: 'board', position: { x: 0, y: 0 } }, to: { x: 1, y: 1 } },
            { from: { from: 'board', position: { x: 0, y: 0 } }, to: { x: 2, y: 1 } },

            { from: { from: 'board', position: { x: 1, y: 0 } }, to: { x: 2, y: 0 } },
            { from: { from: 'board', position: { x: 1, y: 0 } }, to: { x: 2, y: 1 } },

            { from: { from: 'board', position: { x: 0, y: 2 } }, to: { x: 1, y: 0 } },
            { from: { from: 'board', position: { x: 0, y: 2 } }, to: { x: 2, y: 0 } },
            { from: { from: 'board', position: { x: 0, y: 2 } }, to: { x: 1, y: 1 } },
            { from: { from: 'board', position: { x: 0, y: 2 } }, to: { x: 2, y: 1 } },
            { from: { from: 'board', position: { x: 1, y: 2 } }, to: { x: 1, y: 0 } },
            { from: { from: 'board', position: { x: 1, y: 2 } }, to: { x: 2, y: 0 } },
            { from: { from: 'board', position: { x: 1, y: 2 } }, to: { x: 1, y: 1 } },
            { from: { from: 'board', position: { x: 1, y: 2 } }, to: { x: 2, y: 1 } },
            { from: { from: 'board', position: { x: 2, y: 2 } }, to: { x: 1, y: 0 } },
            { from: { from: 'board', position: { x: 2, y: 2 } }, to: { x: 2, y: 0 } },
            { from: { from: 'board', position: { x: 2, y: 2 } }, to: { x: 1, y: 1 } },
            { from: { from: 'board', position: { x: 2, y: 2 } }, to: { x: 2, y: 1 } }
        ]);

        const p2Moves = getHandsPossibleMoves(game, game.player2);
        expect(p2Moves).toStrictEqual([
            { from: { index: 2, from: 'hand' }, to: { x: 2, y: 0 } },
            { from: { index: 2, from: 'hand' }, to: { x: 2, y: 1 } },

            { from: { index: 5, from: 'hand' }, to: { x: 1, y: 0 } },
            { from: { index: 5, from: 'hand' }, to: { x: 2, y: 0 } },
            { from: { index: 5, from: 'hand' }, to: { x: 1, y: 1 } },
            { from: { index: 5, from: 'hand' }, to: { x: 2, y: 1 } },

            { from: { from: 'board', position: { x: 0, y: 1 } }, to: { x: 1, y: 0 } },
            { from: { from: 'board', position: { x: 0, y: 1 } }, to: { x: 2, y: 0 } },
            { from: { from: 'board', position: { x: 0, y: 1 } }, to: { x: 1, y: 1 } },
            { from: { from: 'board', position: { x: 0, y: 1 } }, to: { x: 2, y: 1 } },

            { from: { from: 'board', position: { x: 1, y: 1 } }, to: { x: 2, y: 0 } },
            { from: { from: 'board', position: { x: 1, y: 1 } }, to: { x: 2, y: 1 } }
        ]);
    });
});

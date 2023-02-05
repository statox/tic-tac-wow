import { findAvailableSpotsForPiece } from '$lib/services/gobblet/ia/helpers';
import { describe, expect, it } from 'vitest';
import { convertFixtureGridToGame } from '../../helpers';

describe('findAvailableSpotsForPiece', () => {
    it('Should work', () => {
        const game = convertFixtureGridToGame([
            [[2, 3], [2], []],
            [[], [], [-3]],
            [[-1], [], [-3]]
        ]);

        const spots1 = findAvailableSpotsForPiece(game, 1);
        expect(spots1).toStrictEqual([
            { x: 2, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: 2 }
        ]);

        const spots2 = findAvailableSpotsForPiece(game, -2);
        expect(spots2).toStrictEqual([
            { x: 2, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 2 }
        ]);
    });
});

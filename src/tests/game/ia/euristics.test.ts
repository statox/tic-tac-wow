import { scoreGame } from 'src/libs/services/game/ia/euristics';
import { describe, expect, it } from 'vitest';
import { convertFixtureGridAndHandsToGame, convertFixtureGridToGame } from '../helpers';

describe('scoreGame', () => {
    it('Should return max integer for player 1 winner', () => {
        const game = convertFixtureGridToGame([
            [[1], [-1], []],
            [[-1], [2], [-2]],
            [[], [], [2]]
        ]);
        const score = scoreGame(game);
        expect(score).toBe(Number.MAX_SAFE_INTEGER);
    });

    it('Should return min integer for player 2 winner', () => {
        const game = convertFixtureGridToGame([
            [[], [], [-3]],
            [[], [-2], []],
            [[-3], [], []]
        ]);
        const score = scoreGame(game);
        expect(score).toBe(Number.MIN_SAFE_INTEGER);
    });

    it('Should return half max integer for a draw where both players win', () => {
        const game = convertFixtureGridAndHandsToGame(
            [
                [[-3], [-3], [-2]],
                [[3], [3], [2]],
                [[], [], []]
            ],
            [1, 1, 2],
            [-1, -1, -2]
        );
        const score = scoreGame(game);
        expect(score).toBe(Number.MAX_SAFE_INTEGER / 2);
    });

    it('Should return 1 for a draw where no more possible moves', () => {
        const game = convertFixtureGridAndHandsToGame(
            [
                [[-3], [-3], [3]],
                [[3], [3], [-3]],
                [[-3], [3], [-3]]
            ],
            [],
            []
        );
        const score = scoreGame(game);
        expect(score).toBe(Number.MAX_SAFE_INTEGER / 2);
    });

    it('Should return 1 for a middle spot owned by player 1', () => {
        const game = convertFixtureGridToGame([
            [[], [], []],
            [[], [1], []],
            [[], [], []]
        ]);
        const score = scoreGame(game);
        expect(score).toBe(1);
    });

    it('Should return -1 for a middle spot owned by player 2', () => {
        const game = convertFixtureGridToGame([
            [[], [], []],
            [[], [-1], []],
            [[], [], []]
        ]);
        const score = scoreGame(game);
        expect(score).toBe(-1);
    });

    it('Should return count corners according to owner - 1', () => {
        const game = convertFixtureGridToGame([
            [[1], [], [1, 2]],
            [[], [], []],
            [[], [], [2, 3]]
        ]);
        const score = scoreGame(game);
        expect(score).toBe(3);
    });

    it('Should return count corners according to owner - 2', () => {
        const game = convertFixtureGridToGame([
            [[1], [], [1, 2]],
            [[], [], []],
            [[-1], [], [2, 3]]
        ]);
        const score = scoreGame(game);
        expect(score).toBe(2);
    });
});

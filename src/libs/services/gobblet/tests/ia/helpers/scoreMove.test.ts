import { describe, expect, it } from 'vitest';
import type { Move } from 'src/libs/services/gobblet';
import { scoreMove } from 'src/libs/services/gobblet/ia/euristics';
import { convertFixtureGridToGame } from '../../helpers';

describe('scoreMove', () => {
    it('Should score piece from board above piece from hand', () => {
        const game = convertFixtureGridToGame([
            [[1], [], []],
            [[], [], []],
            [[], [], []]
        ]);
        const tests: { move: Move; expected: number }[] = [
            {
                move: {
                    from: {
                        from: 'hand',
                        index: 0
                    },
                    to: { x: 1, y: 0 }
                },
                expected: 1
            },
            {
                move: {
                    from: {
                        from: 'board',
                        position: { x: 0, y: 0 }
                    },
                    to: { x: 1, y: 0 }
                },
                expected: 11
            }
        ];

        for (const test of tests) {
            expect(scoreMove(game, game.player1, test.move)).toBe(test.expected);
        }
    });

    it('Should score piece by their value', () => {
        const game = convertFixtureGridToGame([
            [[1], [], []],
            [[], [], []],
            [[], [], []]
        ]);
        const tests: { move: Move; expected: number }[] = [
            {
                move: {
                    from: {
                        from: 'hand',
                        index: 0
                    },
                    to: { x: 1, y: 0 }
                },
                expected: 1
            },
            {
                move: {
                    from: {
                        from: 'hand',
                        index: 2
                    },
                    to: { x: 1, y: 0 }
                },
                expected: 2
            },
            {
                move: {
                    from: {
                        from: 'hand',
                        index: 4
                    },
                    to: { x: 1, y: 0 }
                },
                expected: 3
            }
        ];

        for (const test of tests) {
            expect(scoreMove(game, game.player1, test.move)).toBe(test.expected);
        }
    });

    it('Should destination by its quality (center, corner, other)', () => {
        const game = convertFixtureGridToGame([
            [[1], [], []],
            [[], [], []],
            [[], [], []]
        ]);
        const tests: { move: Move; expected: number }[] = [
            {
                move: {
                    from: {
                        from: 'hand',
                        index: 0
                    },
                    to: { x: 0, y: 0 }
                },
                expected: 4
            },
            {
                move: {
                    from: {
                        from: 'hand',
                        index: 0
                    },
                    to: { x: 1, y: 0 }
                },
                expected: 1
            },
            {
                move: {
                    from: {
                        from: 'hand',
                        index: 0
                    },
                    to: { x: 1, y: 1 }
                },
                expected: 6
            }
        ];

        for (const test of tests) {
            expect(scoreMove(game, game.player1, test.move)).toBe(test.expected);
        }
    });
});

import { getNewGame } from 'src/libs/services/gobblet';
import { gameGridAsString, gameHandsAsString } from 'src/libs/services/gobblet/helpers';
import { describe, expect, it } from 'vitest';
import { convertFixtureGridToGame } from '../helpers';

describe('gameGridAsString', () => {
    it('Should return a properly formated game', () => {
        const game = convertFixtureGridToGame([
            [[2, 3], [2], []],
            [[], [], [-3]],
            [[], [], [-3]]
        ]);

        const str = gameGridAsString(game);
        const expectedStr = `2,3\t|2\t|
\t|\t|-3
\t|\t|-3`;

        expect(str).toEqual(expectedStr);
    });
});

describe('gameHandsAsString', () => {
    it('Should return a properly formated game', () => {
        const game = getNewGame();

        const str = gameHandsAsString(game);
        const expectedStr = `P1: 1, 1, 2, 2, 3, 3
P2: -1, -1, -2, -2, -3, -3`;

        expect(str).toEqual(expectedStr);
    });
});

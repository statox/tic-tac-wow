import { checkWinner } from '$lib/services/gobblet/check';
import { describe, expect, it } from 'vitest';
import { getNewGame } from '$lib/services/gobblet';
import { cases } from './checkWinner.fixture';
import { convertFixtureGridToGame } from '../helpers';

describe('checkWinner', () => {
    it('Should not find a winner on a new game', () => {
        const game = getNewGame();
        checkWinner(game);
        expect(game.state).toEqual({
            player: 1,
            action: 'select1'
        });
    });

    for (const testCase of cases) {
        it(testCase.name, () => {
            const game = convertFixtureGridToGame(testCase.grid);
            checkWinner(game);
            expect(game.state).toEqual(testCase.expectedState);
        });
    }
});

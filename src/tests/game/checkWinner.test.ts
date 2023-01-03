import { describe, expect, it } from 'vitest';
import { checkWinner, getNewGame } from '../../libs/services/game';
import { cases } from './checkWinner.fixture';

const convertFixtureGridToGame = (grid: number[][][]) => {
    const game = getNewGame();
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            game.grid[y][x] = grid[y][x].map((value) => {
                return { value, selected: false };
            });
        }
    }

    return game;
};

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

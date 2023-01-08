import { getNewGame } from 'src/libs/services/game';
import { copyGame } from 'src/libs/services/game/helpers';
import { describe, expect, it } from 'vitest';

describe('copyGame', () => {
    it('Should copy all the properties properly', () => {
        const game = getNewGame();
        game.player1.unselectableIndexes.add(1);
        game.player1.unselectableIndexes.add(3);
        game.player2.unselectableIndexes.add(4);

        const copy = copyGame(game);

        expect(game).toStrictEqual(copy);
    });
});

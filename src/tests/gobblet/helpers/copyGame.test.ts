import { getNewGame } from 'src/libs/services/gobblet';
import { copyGame } from 'src/libs/services/gobblet/helpers';
import { makeRandomMove } from 'src/libs/services/gobblet/ia/strategies/random';
import { describe, expect, it } from 'vitest';

describe('copyGame', () => {
    it('Simple game', () => {
        const game = getNewGame();
        game.player1.unselectableIndexes.add(1);
        game.player1.unselectableIndexes.add(3);
        game.player2.unselectableIndexes.add(4);

        const copy = copyGame(game);

        expect(game).toStrictEqual(copy);
    });

    it('Game after 2 random moves', () => {
        const game = getNewGame();
        makeRandomMove(game, game.player1);
        makeRandomMove(game, game.player2);

        const copy = copyGame(game);

        expect(game).toStrictEqual(copy);
    });

    it('Game after 2 random moves - history enabled', () => {
        const game = getNewGame({ historyEnabled: true });
        makeRandomMove(game, game.player1);
        makeRandomMove(game, game.player2);

        const copy = copyGame(game);

        expect(game).toStrictEqual(copy);
    });

    it('Copy are independant', () => {
        const game = getNewGame({ historyEnabled: true });
        makeRandomMove(game, game.player1);
        makeRandomMove(game, game.player2);

        const copy1 = copyGame(game);
        makeRandomMove(copy1, copy1.player1);
        makeRandomMove(copy1, copy1.player2);

        const copy2 = copyGame(copy1);

        expect(copy1).toStrictEqual(copy2);
        expect(game).not.toStrictEqual(copy1);
    });
});

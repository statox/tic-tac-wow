import type { Game, PlayerHand } from './types';

export const copyGame = (game: Game): Game => {
    const p1Unselectable = game.player1.unselectableIndexes;
    const p2Unselectable = game.player2.unselectableIndexes;
    const newGame = JSON.parse(JSON.stringify(game));
    newGame.player1.unselectableIndexes = new Set([...p1Unselectable.values()]);
    newGame.player2.unselectableIndexes = new Set([...p2Unselectable.values()]);
    return newGame;
};

export const getGameCurrentHand = (game: Game): PlayerHand => {
    return game.state.player === 1 ? game.player1 : game.player2;
};

export const getGameOtherHand = (game: Game): PlayerHand => {
    return game.state.player === 1 ? game.player2 : game.player1;
};

export const gameGridAsString = (game: Game, showFull?: true) => {
    if (showFull) {
        // Todo print the selected piece when I have decided how I'll store that
        return game.grid.map((l) => l.map((ps) => ps.join(',')).join('\t|')).join('\n');
    }
    return game.grid.map((l) => l.map((ps) => ps.join(',')).join('\t|')).join('\n');
};
export const printGameGrid = (game: Game, message?: string, showFull?: true) => {
    message && console.log(message);
    console.log(gameGridAsString(game, showFull));
    console.log();
};

export const gameHandsAsString = (game: Game, showFull?: true) => {
    const lines = [];
    for (const hand of [game.player1, game.player2]) {
        if (showFull) {
            // Todo print the selected piece when I have decided how I'll store that
            lines.push(
                `P${hand.player}: ` +
                    hand.pieces
                        .filter((_, index) => !hand.unselectableIndexes.has(index))
                        .join(', ')
            );
            lines.push('selection: ' + JSON.stringify(hand.selectedPiece));
            lines.push('already used: ' + [...hand.unselectableIndexes.values()].join(','));
            continue;
        }
        lines.push(`P${hand.player}: ` + hand.pieces.join(', '));
    }

    return lines.join('\n');
};
export const printGameHands = (game: Game, message?: string, showFull?: true) => {
    message && console.log(message);
    console.log(gameHandsAsString(game, showFull));
    console.log();
};

export const printGameComplete = (game: Game, message?: string) => {
    message && console.log(message);
    console.log('State:', game.state.action, game.state.player);
    printGameGrid(game, '', true);
    printGameHands(game, '', true);
};

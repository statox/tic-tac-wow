import type { StateAction } from './state-machine';
import type { Game, Piece, PieceStack, Player, PlayerHand } from './types';

const makePlayerHand = (player: Player): PlayerHand => {
    const multiplier = player === 1 ? 1 : -1;
    const pieces = [1, 1, 2, 2, 3, 3].map((value) => value * multiplier) as Piece[];

    return {
        player,
        pieces,
        unselectableIndexes: new Set<number>(),
        selectedPiece: null
    };
};

export const getNewGame = (params?: { player2Start?: boolean; historyEnabled?: boolean }): Game => {
    const grid: PieceStack[][] = [];
    for (let y = 0; y < 3; y++) {
        grid.push([]);
        for (let x = 0; x < 3; x++) {
            grid[grid.length - 1].push([]);
        }
    }

    const game = {
        state: {
            player: 1 as Player,
            action: 'select1' as StateAction
        },
        grid,
        player1: makePlayerHand(1),
        player2: makePlayerHand(2),
        historyEnabled: params?.historyEnabled || false,
        history: []
    };

    if (params?.player2Start) {
        game.state.player = 2;
    }

    return game;
};

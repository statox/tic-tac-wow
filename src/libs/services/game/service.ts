import type { StateAction } from './state-machine';
import type { Game, Piece, Player, PlayerHand } from './types';

const makePlayerHand = (player: Player): PlayerHand => {
    const multiplier = player === 1 ? 1 : -1;
    const pieces = [1, 1, 2, 2, 3, 3].map((value) => {
        return { value: value * multiplier, selected: false };
    });

    return {
        player,
        pieces
    };
};

export const selectPieceInHand = (game: Game, hand: PlayerHand, piece: Piece) => {
    if (game.state.player !== hand.player || game.state.action !== 'select1') {
        return;
    }
    hand.pieces.forEach((p) => (p.selected = false));
    piece.selected = true;
    hand.selectedPiece = piece;
    game.state.action = 'select2';
};

export const selectCellInBoard = (game: Game, cell: { x: number; y: number }) => {
    console.log('selectCellInBoard');
    if (game.state.action !== 'select2') {
        console.log('invalid state action');
        return;
    }

    const hand = game.state.player === 1 ? game.player1 : game.player2;
    if (!hand.selectedPiece) {
        console.log('no selected piece');
        return;
    }
    const { x, y } = cell;

    const lastOnStack = game.grid[y][x][game.grid[y][x].length - 1];
    if (Math.abs(lastOnStack?.value || 0) >= Math.abs(hand.selectedPiece.value)) {
        console.log('invalid board cell');
        return;
    }

    game.grid[y][x].push(hand.selectedPiece);

    const pieceIndex = hand.pieces.findIndex((p) => p.selected);
    hand.pieces.splice(pieceIndex, 1);
    hand.selectedPiece = undefined;

    game.state.action = 'select1';
    game.state.player = game.state.player === 1 ? 2 : 1;
};

export const getNewGame = (): Game => {
    const grid: Piece[][][] = [];
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
        player2: makePlayerHand(2)
    };

    return game;
};

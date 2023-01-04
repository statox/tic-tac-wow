// State
//
// Player 1 - Select piece in hand or select board cell
// Player 1 - Select destination cell on board
// Check end
// Player 2 - Select piece in hand or select board cell
// Player 2 - Select destination cell on board
// Check end

import { checkWinner, getGridCellLastPlayer, getGridCellLastValue } from './check';
import type { Game, Piece, Player, PlayerHand } from './types';
export type StateAction = 'select1' | 'select2' | 'winner';

export type State = {
    player: Player;
    action: StateAction;
};

export const selectPieceInHand = (game: Game, hand: PlayerHand, piece: Piece) => {
    if (game.state.player !== hand.player || game.state.action !== 'select1') {
        return;
    }
    hand.pieces.forEach((p) => (p.selected = false));
    piece.selected = true;
    hand.selectedPiece = { ...piece, from: 'hand' };
    game.state.action = 'select2';
};

export const selectCellInBoard = (game: Game, hand: PlayerHand, cell: { x: number; y: number }) => {
    if (game.state.player !== hand.player || game.state.action !== 'select1') {
        return;
    }

    const { x, y } = cell;
    if (x < 0 || y < 0 || x > 2 || y > 2) {
        throw new Error(`Invalid coordinates ${x},${y}`);
    }

    if (game.grid[y][x].length === 0) {
        return;
    }

    if (getGridCellLastPlayer(game.grid, x, y) !== hand.player) {
        return;
    }
    hand.pieces.forEach((p) => (p.selected = false));
    game.grid[y][x][game.grid[y][x].length - 1].selected = true;
    hand.selectedPiece = { ...game.grid[y][x][game.grid[y][x].length - 1], from: 'board' };
    game.state.action = 'select2';
};

export const placeSelectedPieceInBoard = (game: Game, cell: { x: number; y: number }) => {
    if (game.state.action !== 'select2') {
        console.log('invalid state action');
        return -1;
    }

    const hand = game.state.player === 1 ? game.player1 : game.player2;
    if (!hand.selectedPiece) {
        console.log('no selected piece');
        return -1;
    }
    const { x, y } = cell;

    if (getGridCellLastValue(game.grid, x, y) >= Math.abs(hand.selectedPiece.value)) {
        console.log('invalid board cell');
        return -1;
    }

    game.grid[y][x].push({
        value: hand.selectedPiece.value,
        selected: false
    });

    if (hand.selectedPiece.from === 'hand') {
        const pieceIndex = hand.pieces.findIndex((p) => p.selected);
        hand.pieces.splice(pieceIndex, 1);
    }
    if (hand.selectedPiece.from === 'board') {
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                if (game.grid[y][x][game.grid[y][x].length - 1]?.selected) {
                    game.grid[y][x].pop();
                }
            }
        }
    }
    hand.selectedPiece = undefined;

    game.state.action = 'select1';
    game.state.player = game.state.player === 1 ? 2 : 1;

    checkWinner(game);
    return 0;
};

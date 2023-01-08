// State
//
// Player 1 - Select piece in hand or select board cell
// Player 1 - Select destination cell on board
// Check end
// Player 2 - Select piece in hand or select board cell
// Player 2 - Select destination cell on board
// Check end

import {
    checkWinner,
    getGridCellLastPlayer,
    getGridCellLastValue,
    getGridCellPiece
} from './check';
import type { BoardPosition, Game, Player, PlayerHand } from './types';
export type StateAction = 'select1' | 'select2' | 'winner' | 'draw';

export type State = {
    player: Player;
    action: StateAction;
};

export const selectPieceInHand = (game: Game, hand: PlayerHand, pieceSelectionIndex: number) => {
    if (game.state.player !== hand.player || game.state.action !== 'select1') {
        throw new Error('invalid_step');
    }
    if (pieceSelectionIndex >= hand.pieces.length || pieceSelectionIndex < 0) {
        throw new Error('oob_selection_index');
    }
    if (hand.selectedPiece !== null) {
        throw new Error('previous_selection_in_hand');
    }
    if (hand.unselectableIndexes.has(pieceSelectionIndex)) {
        throw new Error('piece_already_used');
    }

    hand.selectedPiece = {
        from: 'hand',
        index: pieceSelectionIndex
    };

    game.state.action = 'select2';
};

export const selectCellInBoard = (game: Game, hand: PlayerHand, boardPosition: BoardPosition) => {
    if (game.state.player !== hand.player || game.state.action !== 'select1') {
        throw new Error('invalid_step');
    }

    const { x, y } = boardPosition;
    if (x < 0 || y < 0 || x > 2 || y > 2) {
        throw new Error(`Invalid coordinates ${x},${y}`);
    }

    // Tried to select a piece in board with previous selection
    if (hand.selectedPiece !== null) {
        throw new Error('previous_selection_in_hand');
    }

    // Tried to select an empty stack
    if (game.grid[y][x].length === 0) {
        throw new Error('empty_stack_selection');
    }

    // Tried to select opponent's hand
    if (getGridCellLastPlayer(game.grid, x, y) !== hand.player) {
        throw new Error('opponent_owned_selection');
    }

    hand.selectedPiece = {
        from: 'board',
        position: { x, y }
    };
    game.state.action = 'select2';
};

export const placeSelectedPieceInBoard = (game: Game, target: BoardPosition) => {
    if (game.state.action !== 'select2') {
        throw new Error('invalid_step');
    }

    const hand = game.state.player === 1 ? game.player1 : game.player2;
    if (hand.selectedPiece === null) {
        throw new Error('no_selection_in_hand');
    }
    const { x, y } = target;

    const pieceValue =
        hand.selectedPiece.from === 'hand'
            ? hand.pieces[hand.selectedPiece.index]
            : getGridCellPiece(
                  game.grid,
                  hand.selectedPiece.position.x,
                  hand.selectedPiece.position.y
              );

    if (pieceValue === null) {
        throw new Error('selected_piece_is_null');
    }

    if (getGridCellLastValue(game.grid, x, y) >= Math.abs(pieceValue)) {
        throw new Error('destination_bigger_than_piece');
    }

    game.grid[target.y][target.x].push(pieceValue);

    if (hand.selectedPiece.from === 'hand') {
        hand.unselectableIndexes.add(hand.selectedPiece.index);
    }
    if (hand.selectedPiece.from === 'board') {
        game.grid[hand.selectedPiece.position.y][hand.selectedPiece.position.x].pop();
    }

    hand.selectedPiece = null;
    game.state.action = 'select1';
    game.state.player = game.state.player === 1 ? 2 : 1;

    checkWinner(game);
    return 0;
};

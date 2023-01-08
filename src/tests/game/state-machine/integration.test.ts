import { getNewGame } from 'src/libs/services/game';
import {
    placeSelectedPieceInBoard,
    selectCellInBoard,
    selectPieceInHand
} from 'src/libs/services/game/state-machine';
import { describe, expect, it } from 'vitest';

describe('state-machine', () => {
    it('Should work for complete flow', () => {
        const game = getNewGame();
        const { player1, player2 } = game;

        // FAIL player 2 try to select from hand and from board before their turn
        expect(() => selectPieceInHand(game, game.player2, 2)).toThrowError('invalid_step');
        expect(() => selectCellInBoard(game, game.player2, { x: 0, y: 0 })).toThrowError(
            'invalid_step'
        );

        // SUCCESS player 1 select piece in hand
        const piece1 = player1.pieces[2]; // Should be 2
        selectPieceInHand(game, game.player1, 2);

        expect(player1.selectedPiece).toEqual({ from: 'hand', index: 2 });
        expect(player2.selectedPiece).toBeNull();

        expect(game.state).toEqual({ action: 'select2', player: 1 });

        // FAIL player 2 try to select from hand and from board before their turn
        expect(() => selectPieceInHand(game, game.player2, 2)).toThrowError('invalid_step');
        expect(() => selectCellInBoard(game, game.player2, { x: 0, y: 0 })).toThrowError(
            'invalid_step'
        );

        // SUCCESS player 1 puts piece on board
        placeSelectedPieceInBoard(game, { x: 0, y: 0 });

        expect(player1.unselectableIndexes).toEqual(new Set([2]));
        expect(player2.unselectableIndexes.size).toBe(0);

        expect(player1.selectedPiece).toBeNull();
        expect(player2.selectedPiece).toBeNull();

        expect(game.grid[0][0]).toHaveLength(1);
        expect(game.grid[0][0][0]).toBe(2);
        expect(game.state).toEqual({ action: 'select1', player: 2 });

        // SUCCESS player 2 select piece in hand
        const piece2 = player2.pieces[4]; // Should be -3
        selectPieceInHand(game, game.player2, 4);

        expect(player1.selectedPiece).toBeNull();
        expect(player2.selectedPiece).toEqual({ from: 'hand', index: 4 });

        expect(game.state).toEqual({ action: 'select2', player: 2 });

        // SUCCESS player 2 puts piece on board
        placeSelectedPieceInBoard(game, { x: 0, y: 0 });

        expect(player1.unselectableIndexes).toEqual(new Set([2]));
        expect(player2.unselectableIndexes).toEqual(new Set([4]));

        expect(player1.selectedPiece).toBeNull();
        expect(player2.selectedPiece).toBeNull();

        expect(game.grid[0][0]).toHaveLength(2);
        expect(game.grid[0][0][0]).toBe(2);
        expect(game.grid[0][0][1]).toBe(-3);
        expect(game.state).toEqual({ action: 'select1', player: 1 });

        // FAIL player 1 select invalid piece on board
        expect(() => selectCellInBoard(game, game.player1, { x: 1, y: 1 })).toThrowError(
            'empty_stack_selection'
        );

        // SUCCESS player 1 and 2 place new piece on on board
        const piece3 = player1.pieces[3]; // Should be 2
        selectPieceInHand(game, game.player1, 3);
        placeSelectedPieceInBoard(game, { x: 1, y: 1 });

        const piece4 = player2.pieces[3]; // Sould be -2
        selectPieceInHand(game, game.player2, 3);
        placeSelectedPieceInBoard(game, { x: 2, y: 2 });

        expect(game.grid[1][1]).toHaveLength(1);
        expect(game.grid[1][1][0]).toBe(2);
        expect(game.grid[2][2]).toHaveLength(1);
        expect(game.grid[2][2][0]).toBe(-2);

        // SUCCESS player 1 select piece on board
        selectCellInBoard(game, game.player1, { x: 1, y: 1 });

        expect(player1.selectedPiece).toEqual({ from: 'board', position: { x: 1, y: 1 } });
        expect(player2.selectedPiece).toBeNull();

        // SUCCESS player 1 move piece in board
        placeSelectedPieceInBoard(game, { x: 2, y: 1 });
        expect(player1.unselectableIndexes.size).toBe(2);

        expect(player1.selectedPiece).toBeNull();
        expect(player2.selectedPiece).toBeNull();

        expect(game.grid[0][0][0]).toBe(piece1);
        expect(game.grid[0][0][1]).toBe(piece2);
        expect(game.grid[1][1]).toHaveLength(0);
        expect(game.grid[1][2][0]).toBe(piece3);
        expect(game.grid[2][2][0]).toBe(piece4);
    });
});

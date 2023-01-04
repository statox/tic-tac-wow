import { getNewGame } from 'src/libs/services/game';
import {
    placeSelectedPieceInBoard,
    selectCellInBoard,
    selectPieceInHand
} from 'src/libs/services/game/state-machine';
import { describe, expect, it } from 'vitest';

describe('state-machine', () => {
    it('Should work for proper flow', () => {
        const game = getNewGame();
        const { player1, player2 } = game;

        // player 1 select piece in hand
        const piece1 = player1.pieces[2];
        selectPieceInHand(game, game.player1, piece1);

        expect(piece1.selected).toBe(true);
        expect(player1.pieces.filter((p) => p.selected)).toHaveLength(1);
        expect(player2.pieces.filter((p) => p.selected)).toHaveLength(0);
        expect(player1.pieces.find((p) => p.selected)?.value).toBe(piece1.value);

        expect(player1.selectedPiece?.value).toBe(piece1.value);
        expect(player1.selectedPiece?.from).toBe('hand');
        expect(player2.selectedPiece).toBeUndefined();

        expect(game.state).toEqual({ action: 'select2', player: 1 });

        // player 1 puts piece on board
        placeSelectedPieceInBoard(game, { x: 0, y: 0 });

        expect(player1.pieces).toHaveLength(5);
        expect(player2.pieces).toHaveLength(6);

        expect(player1.selectedPiece).toBeUndefined();
        expect(player2.selectedPiece).toBeUndefined();

        expect(game.grid[0][0]).toHaveLength(1);
        expect(game.grid[0][0][0]?.value).toBe(piece1.value);
        expect(game.state).toEqual({ action: 'select1', player: 2 });

        // player 2 select piece in hand
        const piece2 = player2.pieces[4];
        selectPieceInHand(game, game.player2, piece2);

        expect(piece2.selected).toBe(true);
        expect(player2.pieces.filter((p) => p.selected)).toHaveLength(1);
        expect(player1.pieces.filter((p) => p.selected)).toHaveLength(0);
        expect(player2.pieces.find((p) => p.selected)?.value).toBe(piece2.value);

        expect(player2.selectedPiece?.value).toBe(piece2.value);
        expect(player2.selectedPiece?.from).toBe('hand');
        expect(player1.selectedPiece).toBeUndefined();

        expect(game.state).toEqual({ action: 'select2', player: 2 });

        // player 2 puts piece on board
        placeSelectedPieceInBoard(game, { x: 0, y: 0 });

        expect(player1.pieces).toHaveLength(5);
        expect(player2.pieces).toHaveLength(5);

        expect(player1.selectedPiece).toBeUndefined();
        expect(player2.selectedPiece).toBeUndefined();

        expect(game.grid[0][0]).toHaveLength(2);
        expect(game.grid[0][0][0]?.value).toBe(piece1.value);
        expect(game.grid[0][0][1]?.value).toBe(piece2.value);
        expect(game.state).toEqual({ action: 'select1', player: 1 });

        // player 1 select invalid piece on board
        selectCellInBoard(game, game.player1, { x: 1, y: 1 });
        expect(player1.selectedPiece).toBeUndefined();

        // player 1 and 2 place new piece on on board
        const piece3 = player1.pieces[2];
        selectPieceInHand(game, game.player1, piece3);
        placeSelectedPieceInBoard(game, { x: 1, y: 1 });

        const piece4 = player2.pieces[3];
        selectPieceInHand(game, game.player2, piece4);
        placeSelectedPieceInBoard(game, { x: 2, y: 2 });

        const p1Length = player1.pieces.length;
        const p2Length = player2.pieces.length;

        // player 1 select piece on board
        selectCellInBoard(game, game.player1, { x: 1, y: 1 });

        expect(player1.pieces.filter((p) => p.selected)).toHaveLength(0);
        expect(player2.pieces.filter((p) => p.selected)).toHaveLength(0);

        expect(player1.selectedPiece?.value).toBe(piece3.value);
        expect(player1.selectedPiece?.from).toBe('board');
        expect(player2.selectedPiece).toBeUndefined();

        // player 1 move piece in board
        placeSelectedPieceInBoard(game, { x: 2, y: 1 });
        expect(player1.pieces).toHaveLength(p1Length);
        expect(player2.pieces).toHaveLength(p2Length);

        expect(player1.pieces.filter((p) => p.selected)).toHaveLength(0);
        expect(player2.pieces.filter((p) => p.selected)).toHaveLength(0);

        expect(player1.selectedPiece).toBeUndefined();
        expect(player2.selectedPiece).toBeUndefined();

        expect(game.grid[0][0][0]?.value).toBe(piece1.value);
        expect(game.grid[0][0][1]?.value).toBe(piece2.value);
        expect(game.grid[1][2][0]?.value).toBe(piece3.value);
        expect(game.grid[2][2][0]?.value).toBe(piece4.value);
    });
});

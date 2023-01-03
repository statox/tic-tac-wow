import { findAvailableSpotsForPiece } from './helpers';
import { placeSelectedPieceInBoard, selectPieceInHand } from './service';
import type { Game, PlayerHand } from './types';

export const makeRandomMove = (game: Game, hand: PlayerHand) => {
    let piece;
    let spot;
    let found = false;

    // Get the indexes in a random order
    const pieceIndexToTry = new Array(hand.pieces.length).fill(0).map((_, index) => index);
    pieceIndexToTry.sort((_, __) => Math.random() - 0.5);

    while (!found && pieceIndexToTry.length > 0) {
        const pieceIndex = pieceIndexToTry.pop() || 0;
        piece = hand.pieces[pieceIndex];
        const spots = findAvailableSpotsForPiece(game, piece);

        if (spots.length) {
            const spotIndex = Math.floor(Math.random() * spots.length);
            spot = spots[spotIndex];
            found = true;
        }
    }

    if (!piece || !spot) {
        throw new Error('could not make a random move');
    }

    selectPieceInHand(game, hand, piece);
    placeSelectedPieceInBoard(game, spot);
};

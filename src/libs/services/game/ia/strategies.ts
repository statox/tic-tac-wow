import { checkWinner } from '../check';
import { copyGame } from '../helpers';
import {
    findAvailableSpotsForPiece,
    getHandPossibleSelection,
    getHandsPossibleMoves,
    getPieceFromSelection
} from './helpers';
import { placeSelectedPieceInBoard, selectCellInBoard, selectPieceInHand } from '../state-machine';
import type { Game, PlayerHand } from '../types';

export const makeRandomMove = (game: Game, hand: PlayerHand) => {
    const moves = getHandsPossibleMoves(game, hand);
    if (moves.size === 0) {
        throw Error('No move possible');
    }
    const possibleSelections = Array.from(moves.keys());
    const randSelectionIdx = Math.floor(Math.random() * possibleSelections.length);
    const selection = possibleSelections[randSelectionIdx];

    const piece = getPieceFromSelection(game, selection);
    const randDestinationIdx = Math.floor(Math.random() * moves.get(selection).length);
    const destination = moves.get(selection)[randDestinationIdx];

    if (selection.from === 'hand') {
        selectPieceInHand(game, hand, piece);
    } else {
        selectCellInBoard(game, hand, selection.position);
    }
    placeSelectedPieceInBoard(game, destination);
};

export const makeWinningMoveOrRandom = (game: Game, hand: PlayerHand) => {
    const possibleSelections = getHandPossibleSelection(game, hand);
    if (possibleSelections.length === 0) {
        throw Error('No move possible');
    }
    const shuffledPossibleSelections = possibleSelections.sort(() => Math.random() - 0.5);

    while (shuffledPossibleSelections.length) {
        const selection = shuffledPossibleSelections.pop();
        if (!selection) {
            continue;
        }
        const piece = getPieceFromSelection(game, selection);
        const possibleDestinations = findAvailableSpotsForPiece(game, piece);
        const shuffledDestinations = [...possibleDestinations].sort(() => Math.random() - 0.5);

        while (shuffledDestinations.length) {
            const gameCopy = copyGame(game);
            const handCopy = gameCopy.state.player === 1 ? gameCopy.player1 : gameCopy.player2;
            const piece = getPieceFromSelection(gameCopy, selection);

            const destination = shuffledDestinations.pop();
            if (!destination) {
                continue;
            }
            if (selection.from === 'hand') {
                selectPieceInHand(gameCopy, handCopy, piece);
            } else {
                selectCellInBoard(gameCopy, handCopy, selection.position);
            }
            placeSelectedPieceInBoard(gameCopy, destination);
            checkWinner(gameCopy);

            if (gameCopy.state.action === 'winner' && gameCopy.state.player === hand.player) {
                // console.log('Make winning move');
                const realPiece = getPieceFromSelection(game, selection);
                if (selection.from === 'hand') {
                    selectPieceInHand(game, hand, realPiece);
                } else {
                    selectCellInBoard(game, hand, selection.position);
                }
                placeSelectedPieceInBoard(game, destination);
                return;
            }
        }
    }

    // console.log('default to random move');
    makeRandomMove(game, hand);
};

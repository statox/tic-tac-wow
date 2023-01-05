import type { Game, PlayerHand } from '../../types';
import { getHandsPossibleMoves, getPieceFromSelection } from '../helpers';

import {
    placeSelectedPieceInBoard,
    selectCellInBoard,
    selectPieceInHand
} from '../../state-machine';

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

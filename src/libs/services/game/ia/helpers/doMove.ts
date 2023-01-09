import {
    placeSelectedPieceInBoard,
    selectCellInBoard,
    selectPieceInHand
} from '../../state-machine';
import type { Game, Move, PlayerHand } from '../../types';

export const doMove = (game: Game, hand: PlayerHand, move: Move) => {
    if (move.from.from === 'hand') {
        selectPieceInHand(game, hand, move.from.index);
    } else {
        selectCellInBoard(game, hand, move.from.position);
    }
    placeSelectedPieceInBoard(game, move.to);
};

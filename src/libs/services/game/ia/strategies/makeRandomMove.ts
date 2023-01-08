import type { Game, PlayerHand } from '../../types';
import { getHandsPossibleMoves } from '../helpers';

import {
    placeSelectedPieceInBoard,
    selectCellInBoard,
    selectPieceInHand
} from '../../state-machine';

export const makeRandomMove = (game: Game, hand: PlayerHand) => {
    const moves = getHandsPossibleMoves(game, hand);
    if (moves.length === 0) {
        throw new Error('no_move_possible');
    }

    const randMoveIndex = Math.floor(Math.random() * moves.length);
    const move = moves[randMoveIndex];

    if (move.from.from === 'hand') {
        selectPieceInHand(game, hand, move.from.index);
    } else {
        selectCellInBoard(game, hand, move.from.position);
    }
    placeSelectedPieceInBoard(game, move.to);
};

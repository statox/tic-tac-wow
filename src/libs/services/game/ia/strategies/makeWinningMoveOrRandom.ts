import type { Game, Move, PlayerHand } from '../../types';
import { getHandsPossibleMoves } from '../helpers';

import {
    placeSelectedPieceInBoard,
    selectCellInBoard,
    selectPieceInHand
} from '../../state-machine';
import { copyGame } from '../../helpers';
import { checkWinner } from '../../check';
import { makeRandomMove } from './makeRandomMove';

const doMove = (game: Game, hand: PlayerHand, move: Move) => {
    if (move.from.from === 'hand') {
        selectPieceInHand(game, hand, move.from.index);
    } else {
        selectCellInBoard(game, hand, move.from.position);
    }
    placeSelectedPieceInBoard(game, move.to);
};

export const makeWinningMoveOrRandom = (game: Game, hand: PlayerHand) => {
    const moves = getHandsPossibleMoves(game, hand);

    if (!moves.length) {
        throw new Error('no_move_possible');
    }

    for (const move of moves) {
        const gameCopy = copyGame(game);
        const handCopy = hand.player === 1 ? gameCopy.player1 : gameCopy.player2;

        doMove(gameCopy, handCopy, move);
        checkWinner(gameCopy);
        if (gameCopy.state.action === 'winner' && gameCopy.state.player === hand.player) {
            doMove(game, hand, move);
            return;
        }
    }

    makeRandomMove(game, hand);
};

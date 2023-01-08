import type { Game, PlayerHand } from '../../types';
import { makeRandomMove } from './makeRandomMove';

export const makeBestMoveByEuristic = (game: Game, hand: PlayerHand) => {
    makeRandomMove(game, hand);
};

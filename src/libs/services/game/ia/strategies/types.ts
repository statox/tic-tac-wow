import type { Game, PlayerHand } from '../../types';

export type Strategy = 'random' | 'win_or_random' | 'euristic' | 'minmax' | 'negamax';
export type StrategyFunction = (game: Game, hand: PlayerHand) => void;

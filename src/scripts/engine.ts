import { compareStrats } from '../libs/services/game/engine/compareStrats';

const NB_GAMES = 30;
// compareStrats('random', 'random', NB_GAMES);
// compareStrats('random', 'win_or_random', NB_GAMES);
// compareStrats('random', 'euristic', NB_GAMES);
// compareStrats('random', 'minmax', NB_GAMES);
// compareStrats('random', 'negamax', NB_GAMES);
compareStrats('random', 'alphabeta', NB_GAMES);
compareStrats('random', 'alphabeta_ordered', NB_GAMES);

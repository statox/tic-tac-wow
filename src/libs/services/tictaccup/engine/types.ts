import type { Strategy } from '../ia/strategies/types';
import type { State } from '../state-machine';

export type GameStats = {
    nbMoves: number;
    finalState: State;
};

export type GameParams = {
    player1Strat: Strategy;
    player2Strat: Strategy;
    showSteps?: boolean;
    showFinalGame?: boolean;
};

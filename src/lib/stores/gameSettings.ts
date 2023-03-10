import { writable } from 'svelte/store';
import type { Strategy } from '../services/gobblet/ia/strategies/types';

export type GameSettings = {
    player2Auto: boolean;
    player2Strat: Strategy;
};

const defaultGameSettings: GameSettings = {
    player2Auto: true,
    player2Strat: 'alphabeta_ordered'
};

export const gameSettings = writable<GameSettings>(defaultGameSettings);

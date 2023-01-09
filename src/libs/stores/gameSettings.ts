import { writable } from 'svelte/store';
import type { Strategy } from '../services/game/ia/strategies/types';

export type GameSettings = {
    player2Auto: boolean;
    player2Strat: Strategy;
};

const defaultGameSettings: GameSettings = {
    player2Auto: true,
    player2Strat: 'alphabeta'
};

export const gameSettings = writable<GameSettings>(defaultGameSettings);

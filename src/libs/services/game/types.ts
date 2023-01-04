import type { State } from './state-machine';

export type Player = 1 | 2;

export type Piece = {
    value: number;
    selected: boolean;
};

export type PlayerHand = {
    player: Player;
    pieces: Piece[];
    selectedPiece?: Piece & { from: 'board' | 'hand' };
};

export type Game = {
    state: State;
    grid: Piece[][][];
    player1: PlayerHand;
    player2: PlayerHand;
};

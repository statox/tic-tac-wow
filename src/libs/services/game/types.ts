import type { State } from './state-machine';

export type Player = 1 | 2;

export type Piece = -1 | -2 | -3 | 1 | 2 | 3;

export type BoardPosition = { x: number; y: number };

export type PiecePosition =
    | { from: 'hand'; index: number }
    | { from: 'board'; position: BoardPosition };

export type PlayerHand = {
    player: Player;
    pieces: Piece[];
    selectedPiece: PiecePosition | null;
    unselectableIndexes: Set<number>;
};

export type PieceStack = Piece[];

export type Game = {
    state: State;
    grid: PieceStack[][];
    player1: PlayerHand;
    player2: PlayerHand;
};

export type Move = {
    from: PiecePosition;
    to: BoardPosition;
};

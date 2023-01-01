export type Player = 1 | 2;

export type Piece = {
    value: number;
    selected: boolean;
};

export type PlayerHand = {
    player: Player;
    pieces: Piece[];
    selectedPiece?: Piece;
};

export type Game = {
    grid: Piece[][][];
    player1: PlayerHand;
    player2: PlayerHand;
};

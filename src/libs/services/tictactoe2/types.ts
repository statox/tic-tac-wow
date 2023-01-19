// We represent the board as two binary numbers representing the position
// of each player' respective pieces
//
// For example is player 0b100000001
// It means the player placed their pieces on the cells NW and SE
// If computer is 0b010010010
// Then the computer placed their pieces on the 2nd column N, C, S
//
// https://rclayton.silvrback.com/winner-in-tic-tac-toe
export type Board = {
    player: PlayerPieces;
    computer: PlayerPieces;
};

export type PlayerPieces = number;

export type BoardCoord = {
    x: number;
    y: number;
};

export enum Player {
    player = 1,
    computer = 2
}

export type GameState = 'player_win' | 'computer_win' | 'draw' | 'not_over';

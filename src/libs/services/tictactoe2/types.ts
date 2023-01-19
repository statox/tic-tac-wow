export type Board = BoardCell[][];

export enum BoardCell {
    EMPTY = 0,
    PLAYER = 1,
    COMPUTER = -1
}

export enum GameResult {
    NOT_OVER = 0,
    PLAYER = 1,
    COMPUTER = -1,
    DRAW = 2
}

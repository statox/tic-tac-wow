import { getNewGame, type Piece, type PieceStack } from '../../libs/services/gobblet';

export const convertFixtureGridToGame = (grid: PieceStack[][]) => {
    const game = getNewGame();
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            game.grid[y][x] = [...grid[y][x]];
        }
    }

    return game;
};

export const convertFixtureGridAndHandsToGame = (
    grid: PieceStack[][],
    p1: Piece[],
    p2: Piece[]
) => {
    const game = getNewGame();
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            game.grid[y][x] = [...grid[y][x]];
        }
    }
    game.player1.pieces = [...p1];
    game.player2.pieces = [...p2];

    return game;
};

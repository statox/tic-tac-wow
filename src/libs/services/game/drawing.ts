import type p5 from 'p5';
import type { Game } from './types';

const drawLines = (p5: p5) => {
    const { width, height } = p5;
    const cellWidth = width / 3;
    const cellHeight = height / 3;

    // Draw the 4 lines of the board in white
    p5.noFill();
    p5.stroke(255);
    p5.line(cellWidth, 0, cellWidth, height);
    p5.line(cellWidth * 2, 0, cellWidth * 2, height);
    p5.line(0, cellHeight, width, cellHeight);
    p5.line(0, cellHeight * 2, width, cellHeight * 2);
};

const drawBoard = (p5: p5, game: Game) => {
    const { grid } = game;
    const { width, height } = p5;
    const cellWidth = width / 3;
    const cellHeight = height / 3;

    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            for (const piece of grid[y][x]) {
                const color = piece > 0 ? '#2ae4fc' : '#fc1a0a';
                const size = Math.abs(piece);
                const screenSize = p5.map(size, 1, 3, cellWidth / 3, cellWidth / 1.3);
                p5.stroke(color);
                p5.circle(
                    x * cellWidth + cellWidth / 2,
                    y * cellHeight + cellHeight / 2,
                    screenSize
                );
            }
        }
    }
};

export const drawGame = (p5: p5, game: Game) => {
    drawLines(p5);
    drawBoard(p5, game);
};

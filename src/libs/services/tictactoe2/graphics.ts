import type p5 from 'p5';
import type { Board } from './types';

export function drawBoard(p5: p5, board: Board) {
    const cellWidth = p5.width / 3;
    const cellHeight = p5.height / 3;

    const { height, width } = p5;
    // Draw the 4 lines of the board in white
    p5.noFill();
    p5.stroke(255);
    p5.line(cellWidth, 0, cellWidth, height);
    p5.line(cellWidth * 2, 0, cellWidth * 2, height);
    p5.line(0, cellHeight, width, cellHeight);
    p5.line(0, cellHeight * 2, width, cellHeight * 2);

    // For each grid in the board show the corresonding tile
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (board[y][x] === 1) {
                p5.stroke('blue');
                p5.circle(
                    x * cellWidth + cellWidth / 2,
                    y * cellHeight + cellHeight / 2,
                    cellHeight / 2
                );
            }
            if (board[y][x] === -1) {
                p5.stroke('red');
                p5.line(
                    x * cellWidth + cellWidth * 0.3,
                    y * cellHeight + cellHeight * 0.3,
                    x * cellWidth + cellWidth * 0.7,
                    y * cellHeight + cellHeight * 0.7
                );
                p5.line(
                    x * cellWidth + cellWidth * 0.7,
                    y * cellHeight + cellHeight * 0.3,
                    x * cellWidth + cellWidth * 0.3,
                    y * cellHeight + cellHeight * 0.7
                );
            }
        }
    }
}

// Take the screen position of the mouse (mouseX, mouseY)
// the height and width of the canvas (screenWidth, screenHeight)
// and the height and width of the board (boardWidth, boardHeight) which should be 3x3
// and return the corresponding coordinates in the board
export function screenCoordsToGridCoords(
    p5: p5,
    mouseX: number,
    mouseY: number,
    screenWidth: number,
    screenHeight: number,
    boardWidth: number,
    boardHeight: number
) {
    const x = Math.floor(p5.map(mouseX, 0, screenWidth, 0, boardWidth));
    const y = Math.floor(p5.map(mouseY, 0, screenHeight, 0, boardHeight));
    return { x, y };
}

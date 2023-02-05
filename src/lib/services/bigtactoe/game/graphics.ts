import type p5 from 'p5';
import { xyToIndex } from './coordinates';
import { Player, type Board, type BoardCoord } from './types';

export const colorX = '#FF0000';
export const colorO = '#64ccfc';
export function drawBoard(
    p5: p5,
    board: Board,
    params?: {
        drawSelection?: boolean;
        selection?: BoardCoord;
        currentPlayer?: Player;
        highlightCell?: BoardCoord | undefined;
    }
) {
    const cellWidth = p5.width / 4;
    const cellHeight = p5.height / 4;

    const { height, width } = p5;
    const { drawSelection, selection, currentPlayer } = params || {};
    p5.rectMode(p5.CENTER);
    // Draw the 4 lines of the board in white
    p5.noFill();
    p5.stroke(255);
    p5.strokeWeight(1);

    for (let i = 0; i < 4; i++) {
        p5.line(cellWidth * i, 0, cellWidth * i, height);
        p5.line(0, cellHeight * i, width, cellHeight * i);
    }
    // Frame
    p5.stroke(155);
    p5.strokeWeight(3);
    p5.rect(p5.width / 2, p5.height / 2, p5.width, p5.height);

    p5.strokeWeight(4);
    // For each grid in the board show the corresonding tile
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            // Highlight cell background if requested
            if (params?.highlightCell?.x === x && params?.highlightCell.y === y) {
                p5.noStroke();
                p5.fill(30, 250, 80, 80);
                p5.rect(
                    x * cellWidth + cellWidth / 2,
                    y * cellHeight + cellHeight / 2,
                    cellWidth * 0.95,
                    cellHeight * 0.95
                );
                p5.noFill();
            }
            // Draw O
            if (
                board[xyToIndex({ x, y })] === Player.player ||
                (drawSelection &&
                    currentPlayer === Player.player &&
                    selection?.x === x &&
                    selection?.y === y)
            ) {
                p5.stroke(colorO);
                p5.circle(
                    x * cellWidth + cellWidth / 2,
                    y * cellHeight + cellHeight / 2,
                    cellHeight / 2
                );
            }
            // Draw X
            if (
                board[xyToIndex({ x, y })] === Player.computer ||
                (drawSelection &&
                    currentPlayer === Player.computer &&
                    selection?.x === x &&
                    selection?.y === y)
            ) {
                p5.stroke(colorX);
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
export function screenCoordsToGridCoords(p5: p5) {
    const { mouseX, mouseY, width, height } = p5;
    const x = Math.floor(p5.map(mouseX, 0, width, 0, 4));
    const y = Math.floor(p5.map(mouseY, 0, height, 0, 4));
    return { x, y };
}

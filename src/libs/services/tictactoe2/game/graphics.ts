import type p5 from 'p5';
import { spotIsFree } from './player';
import { Player, type Board, type BoardCoord } from './types';

export function drawBoard(
    p5: p5,
    board: Board,
    params?: { drawSelection: boolean; selection: BoardCoord; currentPlayer: Player }
) {
    const cellWidth = p5.width / 3;
    const cellHeight = p5.height / 3;

    const { height, width } = p5;
    const { drawSelection, selection, currentPlayer } = params || {};
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
            if (
                !spotIsFree(board.player, { x, y }) ||
                (drawSelection &&
                    currentPlayer === Player.player &&
                    selection?.x === x &&
                    selection?.y === y)
            ) {
                p5.stroke('blue');
                p5.circle(
                    x * cellWidth + cellWidth / 2,
                    y * cellHeight + cellHeight / 2,
                    cellHeight / 2
                );
            }
            if (
                !spotIsFree(board.computer, { x, y }) ||
                (drawSelection &&
                    currentPlayer === Player.computer &&
                    selection?.x === x &&
                    selection?.y === y)
            ) {
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
export function screenCoordsToGridCoords(p5: p5) {
    const { mouseX, mouseY, width, height } = p5;
    const x = Math.floor(p5.map(mouseX, 0, width, 0, 3));
    const y = Math.floor(p5.map(mouseY, 0, height, 0, 3));
    return { x, y };
}

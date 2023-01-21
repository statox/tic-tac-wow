import type { BoardCoord } from './types';

export function xyToIndex(pos: BoardCoord) {
    const { x, y } = pos;
    if (x < 0 || x > 2 || y < 0 || y > 2) {
        return new Error(`Invalid coords (${x},${y})`);
    }
    return 8 - (3 * y + x);
}

export function indexToXY(i: number) {
    if (i < 0 || i > 8) {
        return new Error('Invalid index ${i}');
    }

    return {
        x: 2 - (i % 3),
        y: 2 - Math.floor(i / 3)
    };
}

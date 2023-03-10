import type { BoardCoord } from './types';

export function xyToIndex(pos: BoardCoord) {
    const { x, y } = pos;
    if (x < 0 || x > 2 || y < 0 || y > 2) {
        throw new Error(`Invalid coords (${x},${y})`);
    }
    return 8 - (3 * y + x);
}

export function indexToXY(i: number) {
    if (i < 0 || i > 8) {
        throw new Error('Invalid index ${i}');
    }

    return {
        x: 2 - (i % 3),
        y: 2 - Math.floor(i / 3)
    };
}

// 0,0     1,0     2,0
//  8       7       6

// 0,1     1,1     2,1
//  5       4       3

// 0,2     1,2     2,2
//  2       1       0

export const TOP_LEFT = { x: 0, y: 0 };
export const TOP = { x: 1, y: 0 };
export const TOP_RIGHT = { x: 2, y: 0 };

export const LEFT = { x: 0, y: 1 };
export const CENTER = { x: 1, y: 1 };
export const RIGHT = { x: 2, y: 1 };

export const BOTTOM_LEFT = { x: 0, y: 2 };
export const BOTTOM = { x: 1, y: 2 };
export const BOTTOM_RIGHT = { x: 2, y: 2 };

export const TOP_LEFT_INDEX = 8;
export const TOP_INDEX = 7;
export const TOP_RIGHT_INDEX = 6;

export const LEFT_INDEX = 5;
export const CENTER_INDEX = 4;
export const RIGHT_INDEX = 3;

export const BOTTOM_LEFT_INDEX = 2;
export const BOTTOM_INDEX = 1;
export const BOTTOM_RIGHT_INDEX = 0;

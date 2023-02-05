import type { BoardCoord } from './types';

export function xyToIndex(pos: BoardCoord) {
    const { x, y } = pos;
    if (x < 0 || x > 3 || y < 0 || y > 3) {
        throw new Error(`Invalid coords (${x},${y})`);
    }
    return y * 4 + x;
}

export function indexToXY(i: number) {
    if (i < 0 || i > 15) {
        throw new Error(`Invalid index ${i}`);
    }

    return {
        x: i % 4,
        y: Math.floor(i / 4)
    };
}

// 0,0     1,0     2,0     3,0
//  0       1       2       3

// 0,1     1,1     2,1     3,1
//  4       5       6       7

// 0,2     1,2     2,2     3,2
//  8       9       10      11

// 0,3     1,3     2,3     3,3
//  12      13      14      15

export const R1_C1 = { x: 0, y: 0 };
export const R1_C2 = { x: 1, y: 0 };
export const R1_C3 = { x: 2, y: 0 };
export const R1_C4 = { x: 3, y: 0 };

export const R2_C1 = { x: 0, y: 1 };
export const R2_C2 = { x: 1, y: 1 };
export const R2_C3 = { x: 2, y: 1 };
export const R2_C4 = { x: 3, y: 1 };

export const R3_C1 = { x: 0, y: 2 };
export const R3_C2 = { x: 1, y: 2 };
export const R3_C3 = { x: 2, y: 2 };
export const R3_C4 = { x: 3, y: 2 };

export const R4_C1 = { x: 0, y: 3 };
export const R4_C2 = { x: 1, y: 3 };
export const R4_C3 = { x: 2, y: 3 };
export const R4_C4 = { x: 3, y: 3 };

export const R1_C1_INDEX = 0;
export const R1_C2_INDEX = 1;
export const R1_C3_INDEX = 2;
export const R1_C4_INDEX = 3;

export const R2_C1_INDEX = 4;
export const R2_C2_INDEX = 5;
export const R2_C3_INDEX = 6;
export const R2_C4_INDEX = 7;

export const R3_C1_INDEX = 8;
export const R3_C2_INDEX = 9;
export const R3_C3_INDEX = 10;
export const R3_C4_INDEX = 11;

export const R4_C1_INDEX = 12;
export const R4_C2_INDEX = 13;
export const R4_C3_INDEX = 14;
export const R4_C4_INDEX = 15;

import { indexToXY, xyToIndex } from 'src/libs/services/tictactoe2';
import { describe, expect, it } from 'vitest';

// 0,0     1,0     2,0
//  8       7       6

// 0,1     1,1     2,1
//  5       4       3

// 0,2     1,2     2,2
//  2       1       0

describe('xyToIndex', () => {
    it('should work', () => {
        expect(xyToIndex({ x: 0, y: 0 })).toBe(8);
        expect(xyToIndex({ x: 1, y: 0 })).toBe(7);
        expect(xyToIndex({ x: 2, y: 0 })).toBe(6);

        expect(xyToIndex({ x: 0, y: 1 })).toBe(5);
        expect(xyToIndex({ x: 1, y: 1 })).toBe(4);
        expect(xyToIndex({ x: 2, y: 1 })).toBe(3);

        expect(xyToIndex({ x: 0, y: 2 })).toBe(2);
        expect(xyToIndex({ x: 1, y: 2 })).toBe(1);
        expect(xyToIndex({ x: 2, y: 2 })).toBe(0);

        expect(() => xyToIndex({ x: -1, y: 2 })).toThrow();
        expect(() => xyToIndex({ x: 1, y: -2 })).toThrow();
        expect(() => xyToIndex({ x: 10, y: 2 })).toThrow();
        expect(() => xyToIndex({ x: 1, y: 20 })).toThrow();
    });
});

describe('indexToXY', () => {
    it('should work', () => {
        expect(indexToXY(8)).toStrictEqual({ x: 0, y: 0 });
        expect(indexToXY(7)).toStrictEqual({ x: 1, y: 0 });
        expect(indexToXY(6)).toStrictEqual({ x: 2, y: 0 });

        expect(indexToXY(5)).toStrictEqual({ x: 0, y: 1 });
        expect(indexToXY(4)).toStrictEqual({ x: 1, y: 1 });
        expect(indexToXY(3)).toStrictEqual({ x: 2, y: 1 });

        expect(indexToXY(2)).toStrictEqual({ x: 0, y: 2 });
        expect(indexToXY(1)).toStrictEqual({ x: 1, y: 2 });
        expect(indexToXY(0)).toStrictEqual({ x: 2, y: 2 });

        expect(() => indexToXY(-1)).toThrow();
        expect(() => indexToXY(9)).toThrow();
    });
});

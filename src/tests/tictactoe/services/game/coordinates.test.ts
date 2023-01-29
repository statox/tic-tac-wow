import { indexToXY, xyToIndex } from 'src/libs/services/tictactoe';
import { describe, expect, it } from 'vitest';
import {
    BOTTOM,
    BOTTOM_INDEX,
    BOTTOM_LEFT,
    BOTTOM_LEFT_INDEX,
    BOTTOM_RIGHT,
    BOTTOM_RIGHT_INDEX,
    CENTER,
    CENTER_INDEX,
    LEFT,
    LEFT_INDEX,
    RIGHT,
    RIGHT_INDEX,
    TOP,
    TOP_INDEX,
    TOP_LEFT,
    TOP_LEFT_INDEX,
    TOP_RIGHT,
    TOP_RIGHT_INDEX
} from './helpers';

// 0,0     1,0     2,0
//  8       7       6

// 0,1     1,1     2,1
//  5       4       3

// 0,2     1,2     2,2
//  2       1       0

describe('xyToIndex', () => {
    it('should work', () => {
        expect(xyToIndex(TOP_LEFT)).toBe(TOP_LEFT_INDEX);
        expect(xyToIndex(TOP)).toBe(TOP_INDEX);
        expect(xyToIndex(TOP_RIGHT)).toBe(TOP_RIGHT_INDEX);

        expect(xyToIndex(LEFT)).toBe(LEFT_INDEX);
        expect(xyToIndex(CENTER)).toBe(CENTER_INDEX);
        expect(xyToIndex(RIGHT)).toBe(RIGHT_INDEX);

        expect(xyToIndex(BOTTOM_LEFT)).toBe(BOTTOM_LEFT_INDEX);
        expect(xyToIndex(BOTTOM)).toBe(BOTTOM_INDEX);
        expect(xyToIndex(BOTTOM_RIGHT)).toBe(BOTTOM_RIGHT_INDEX);

        expect(() => xyToIndex({ x: -1, y: 2 })).toThrow();
        expect(() => xyToIndex({ x: 1, y: -2 })).toThrow();
        expect(() => xyToIndex({ x: 10, y: 2 })).toThrow();
        expect(() => xyToIndex({ x: 1, y: 20 })).toThrow();
    });
});

describe('indexToXY', () => {
    it('should work', () => {
        expect(indexToXY(TOP_LEFT_INDEX)).toStrictEqual(TOP_LEFT);
        expect(indexToXY(TOP_INDEX)).toStrictEqual(TOP);
        expect(indexToXY(TOP_RIGHT_INDEX)).toStrictEqual(TOP_RIGHT);

        expect(indexToXY(LEFT_INDEX)).toStrictEqual(LEFT);
        expect(indexToXY(CENTER_INDEX)).toStrictEqual(CENTER);
        expect(indexToXY(RIGHT_INDEX)).toStrictEqual(RIGHT);

        expect(indexToXY(BOTTOM_LEFT_INDEX)).toStrictEqual(BOTTOM_LEFT);
        expect(indexToXY(BOTTOM_INDEX)).toStrictEqual(BOTTOM);
        expect(indexToXY(BOTTOM_RIGHT_INDEX)).toStrictEqual(BOTTOM_RIGHT);

        expect(() => indexToXY(-1)).toThrow();
        expect(() => indexToXY(9)).toThrow();
    });
});

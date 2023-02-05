import { indexToXY, xyToIndex } from '$lib/services/bigtactoe';
import { describe, expect, it } from 'vitest';
import {
    R1_C1,
    R1_C2,
    R1_C3,
    R1_C4,
    R2_C1,
    R2_C2,
    R2_C3,
    R2_C4,
    R3_C1,
    R3_C2,
    R3_C3,
    R3_C4,
    R4_C1,
    R4_C2,
    R4_C3,
    R4_C4,
    R1_C1_INDEX,
    R1_C2_INDEX,
    R1_C3_INDEX,
    R1_C4_INDEX,
    R2_C1_INDEX,
    R2_C2_INDEX,
    R2_C3_INDEX,
    R2_C4_INDEX,
    R3_C1_INDEX,
    R3_C2_INDEX,
    R3_C3_INDEX,
    R3_C4_INDEX,
    R4_C1_INDEX,
    R4_C2_INDEX,
    R4_C3_INDEX,
    R4_C4_INDEX
} from '$lib/services/bigtactoe';

// 0,0     1,0     2,0
//  8       7       6

// 0,1     1,1     2,1
//  5       4       3

// 0,2     1,2     2,2
//  2       1       0

describe('xyToIndex', () => {
    it('should work', () => {
        expect(xyToIndex(R1_C1)).toBe(R1_C1_INDEX);
        expect(xyToIndex(R1_C2)).toBe(R1_C2_INDEX);
        expect(xyToIndex(R1_C3)).toBe(R1_C3_INDEX);
        expect(xyToIndex(R1_C4)).toBe(R1_C4_INDEX);
        expect(xyToIndex(R2_C1)).toBe(R2_C1_INDEX);
        expect(xyToIndex(R2_C2)).toBe(R2_C2_INDEX);
        expect(xyToIndex(R2_C3)).toBe(R2_C3_INDEX);
        expect(xyToIndex(R2_C4)).toBe(R2_C4_INDEX);
        expect(xyToIndex(R3_C1)).toBe(R3_C1_INDEX);
        expect(xyToIndex(R3_C2)).toBe(R3_C2_INDEX);
        expect(xyToIndex(R3_C3)).toBe(R3_C3_INDEX);
        expect(xyToIndex(R3_C4)).toBe(R3_C4_INDEX);
        expect(xyToIndex(R4_C1)).toBe(R4_C1_INDEX);
        expect(xyToIndex(R4_C2)).toBe(R4_C2_INDEX);
        expect(xyToIndex(R4_C3)).toBe(R4_C3_INDEX);
        expect(xyToIndex(R4_C4)).toBe(R4_C4_INDEX);

        expect(() => xyToIndex({ x: -1, y: 2 })).toThrow();
        expect(() => xyToIndex({ x: 1, y: -2 })).toThrow();
        expect(() => xyToIndex({ x: 10, y: 2 })).toThrow();
        expect(() => xyToIndex({ x: 1, y: 20 })).toThrow();
    });
});

describe('indexToXY', () => {
    it('should work', () => {
        expect(indexToXY(R1_C1_INDEX)).toStrictEqual(R1_C1);
        expect(indexToXY(R1_C2_INDEX)).toStrictEqual(R1_C2);
        expect(indexToXY(R1_C3_INDEX)).toStrictEqual(R1_C3);
        expect(indexToXY(R1_C4_INDEX)).toStrictEqual(R1_C4);
        expect(indexToXY(R2_C1_INDEX)).toStrictEqual(R2_C1);
        expect(indexToXY(R2_C2_INDEX)).toStrictEqual(R2_C2);
        expect(indexToXY(R2_C3_INDEX)).toStrictEqual(R2_C3);
        expect(indexToXY(R2_C4_INDEX)).toStrictEqual(R2_C4);
        expect(indexToXY(R3_C1_INDEX)).toStrictEqual(R3_C1);
        expect(indexToXY(R3_C2_INDEX)).toStrictEqual(R3_C2);
        expect(indexToXY(R3_C3_INDEX)).toStrictEqual(R3_C3);
        expect(indexToXY(R3_C4_INDEX)).toStrictEqual(R3_C4);
        expect(indexToXY(R4_C1_INDEX)).toStrictEqual(R4_C1);
        expect(indexToXY(R4_C2_INDEX)).toStrictEqual(R4_C2);
        expect(indexToXY(R4_C3_INDEX)).toStrictEqual(R4_C3);
        expect(indexToXY(R4_C4_INDEX)).toStrictEqual(R4_C4);

        expect(() => indexToXY(-1)).toThrow();
        expect(() => indexToXY(16)).toThrow();
    });
});

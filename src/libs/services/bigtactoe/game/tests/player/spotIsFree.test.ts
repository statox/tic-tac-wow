import {
    spotIsFree,
    BOTTOM_INDEX,
    BOTTOM_LEFT_INDEX,
    BOTTOM_RIGHT_INDEX,
    CENTER_INDEX,
    LEFT_INDEX,
    RIGHT_INDEX,
    TOP_INDEX,
    TOP_LEFT_INDEX,
    TOP_RIGHT_INDEX
} from 'src/libs/services/bigtactoe';
import { describe, expect, it } from 'vitest';

describe('spotIsFree', () => {
    it('Should work', () => {
        // ...OOO...
        expect(spotIsFree(0b000111000, TOP_LEFT_INDEX)).toBe(true);
        expect(spotIsFree(0b000111000, TOP_INDEX)).toBe(true);
        expect(spotIsFree(0b000111000, TOP_RIGHT_INDEX)).toBe(true);

        expect(spotIsFree(0b000111000, LEFT_INDEX)).toBe(false);
        expect(spotIsFree(0b000111000, CENTER_INDEX)).toBe(false);
        expect(spotIsFree(0b000111000, RIGHT_INDEX)).toBe(false);

        expect(spotIsFree(0b000111000, BOTTOM_LEFT_INDEX)).toBe(true);
        expect(spotIsFree(0b000111000, BOTTOM_INDEX)).toBe(true);
        expect(spotIsFree(0b000111000, BOTTOM_RIGHT_INDEX)).toBe(true);

        // O.O.O.O.O
        expect(spotIsFree(0b101010101, TOP_LEFT_INDEX)).toBe(false);
        expect(spotIsFree(0b101010101, TOP_INDEX)).toBe(true);
        expect(spotIsFree(0b101010101, TOP_RIGHT_INDEX)).toBe(false);

        expect(spotIsFree(0b101010101, LEFT_INDEX)).toBe(true);
        expect(spotIsFree(0b101010101, CENTER_INDEX)).toBe(false);
        expect(spotIsFree(0b101010101, RIGHT_INDEX)).toBe(true);

        expect(spotIsFree(0b101010101, BOTTOM_LEFT_INDEX)).toBe(false);
        expect(spotIsFree(0b101010101, BOTTOM_INDEX)).toBe(true);
        expect(spotIsFree(0b101010101, BOTTOM_RIGHT_INDEX)).toBe(false);

        // OOO......
        expect(spotIsFree(0b111000000, TOP_LEFT_INDEX)).toBe(false);
        expect(spotIsFree(0b111000000, TOP_INDEX)).toBe(false);
        expect(spotIsFree(0b111000000, TOP_RIGHT_INDEX)).toBe(false);

        expect(spotIsFree(0b111000000, LEFT_INDEX)).toBe(true);
        expect(spotIsFree(0b111000000, CENTER_INDEX)).toBe(true);
        expect(spotIsFree(0b111000000, RIGHT_INDEX)).toBe(true);

        expect(spotIsFree(0b111000000, BOTTOM_LEFT_INDEX)).toBe(true);
        expect(spotIsFree(0b111000000, BOTTOM_INDEX)).toBe(true);
        expect(spotIsFree(0b111000000, BOTTOM_RIGHT_INDEX)).toBe(true);
    });
});

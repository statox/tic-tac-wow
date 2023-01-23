import { spotIsFree } from 'src/libs/services/tictactoe2';
import { describe, expect, it } from 'vitest';

describe('spotIsFree', () => {
    it('Should work', () => {
        // ...OOO...
        expect(spotIsFree(0b000111000, { x: 0, y: 0 })).toBe(true);
        expect(spotIsFree(0b000111000, { x: 1, y: 0 })).toBe(true);
        expect(spotIsFree(0b000111000, { x: 2, y: 0 })).toBe(true);

        expect(spotIsFree(0b000111000, { x: 0, y: 1 })).toBe(false);
        expect(spotIsFree(0b000111000, { x: 1, y: 1 })).toBe(false);
        expect(spotIsFree(0b000111000, { x: 2, y: 1 })).toBe(false);

        expect(spotIsFree(0b000111000, { x: 0, y: 2 })).toBe(true);
        expect(spotIsFree(0b000111000, { x: 1, y: 2 })).toBe(true);
        expect(spotIsFree(0b000111000, { x: 2, y: 2 })).toBe(true);

        // O.O.O.O.O
        expect(spotIsFree(0b101010101, { x: 0, y: 0 })).toBe(false);
        expect(spotIsFree(0b101010101, { x: 1, y: 0 })).toBe(true);
        expect(spotIsFree(0b101010101, { x: 2, y: 0 })).toBe(false);

        expect(spotIsFree(0b101010101, { x: 0, y: 1 })).toBe(true);
        expect(spotIsFree(0b101010101, { x: 1, y: 1 })).toBe(false);
        expect(spotIsFree(0b101010101, { x: 2, y: 1 })).toBe(true);

        expect(spotIsFree(0b101010101, { x: 0, y: 2 })).toBe(false);
        expect(spotIsFree(0b101010101, { x: 1, y: 2 })).toBe(true);
        expect(spotIsFree(0b101010101, { x: 2, y: 2 })).toBe(false);

        // OOO......
        expect(spotIsFree(0b111000000, { x: 0, y: 0 })).toBe(false);
        expect(spotIsFree(0b111000000, { x: 1, y: 0 })).toBe(false);
        expect(spotIsFree(0b111000000, { x: 2, y: 0 })).toBe(false);

        expect(spotIsFree(0b111000000, { x: 0, y: 1 })).toBe(true);
        expect(spotIsFree(0b111000000, { x: 1, y: 1 })).toBe(true);
        expect(spotIsFree(0b111000000, { x: 2, y: 1 })).toBe(true);

        expect(spotIsFree(0b111000000, { x: 0, y: 2 })).toBe(true);
        expect(spotIsFree(0b111000000, { x: 1, y: 2 })).toBe(true);
        expect(spotIsFree(0b111000000, { x: 2, y: 2 })).toBe(true);
    });
});

import type { PlayerPieces } from 'src/libs/services/tictactoe2';
import {
    rotatePiecesClockwise,
    piecesAreEquivalent,
    boardAreEquivalent
} from 'src/libs/services/tictactoe2/ia/helpers';
import { describe, expect, it } from 'vitest';

describe('rotatePiecesClockwise', () => {
    it('should do nothing for a hand with only the middle square', () => {
        expect(rotatePiecesClockwise(0b000010000)).toBe(0b000010000);
    });
    it('should work poperly for corners', () => {
        expect(rotatePiecesClockwise(0b100000000)).toBe(0b001000000);
        expect(rotatePiecesClockwise(0b001000000)).toBe(0b000000001);
        expect(rotatePiecesClockwise(0b000000001)).toBe(0b000000100);
        expect(rotatePiecesClockwise(0b000000100)).toBe(0b100000000);
        expect(rotatePiecesClockwise(0b101000101)).toBe(0b101000101);
    });
    it('should work poperly for edges', () => {
        expect(rotatePiecesClockwise(0b010000000)).toBe(0b000001000);
        expect(rotatePiecesClockwise(0b000001000)).toBe(0b000000010);
        expect(rotatePiecesClockwise(0b000000010)).toBe(0b000100000);
        expect(rotatePiecesClockwise(0b000100000)).toBe(0b010000000);
        expect(rotatePiecesClockwise(0b010101010)).toBe(0b010101010);
    });
    it('should work poperly several pieces in hand', () => {
        expect(rotatePiecesClockwise(0b111000000)).toBe(0b001001001);
        expect(rotatePiecesClockwise(0b000111000)).toBe(0b010010010);
        expect(rotatePiecesClockwise(0b000000111)).toBe(0b100100100);
        expect(rotatePiecesClockwise(0b100100000)).toBe(0b011000000);
        expect(rotatePiecesClockwise(0b001010001)).toBe(0b000010101);
    });
});

describe('piecesAreEquivalent', () => {
    it('should detect lines equivalence', () => {
        expect(piecesAreEquivalent(0b111000000, 0b001001001)).toBe(true);
        expect(piecesAreEquivalent(0b111000000, 0b000000111)).toBe(true);
        expect(piecesAreEquivalent(0b111000000, 0b100100100)).toBe(true);
        expect(piecesAreEquivalent(0b111000000, 0b111000000)).toBe(true);
    });
    it('should detect isocele triangle equivalence', () => {
        expect(piecesAreEquivalent(0b000010101, 0b101010000)).toBe(true);
        expect(piecesAreEquivalent(0b000010101, 0b100010100)).toBe(true);
        expect(piecesAreEquivalent(0b000010101, 0b001010001)).toBe(true);
        expect(piecesAreEquivalent(0b000010101, 0b000010101)).toBe(true);
    });
    it('should detect square triangle equivalence', () => {
        expect(piecesAreEquivalent(0b000001011, 0b000100110)).toBe(true);
    });
    it('should detect vertical symetry', () => {
        expect(piecesAreEquivalent(0b101001000, 0b101001000)).toBe(true);
        expect(piecesAreEquivalent(0b100010100, 0b001010001)).toBe(true);
        expect(piecesAreEquivalent(0b100100111, 0b001001111)).toBe(true);
    });
    it('should detect horizontal symetry', () => {
        expect(piecesAreEquivalent(0b101001000, 0b000001101)).toBe(true);
        expect(piecesAreEquivalent(0b101011010, 0b010011101)).toBe(true);
    });
    it('should return false for no similarity', () => {
        expect(piecesAreEquivalent(0b111000000, 0b101001001)).toBe(false);
        expect(piecesAreEquivalent(0b000010001, 0b101010000)).toBe(false);
    });
});

type BoardCases = {
    [key: string]: {
        p1: PlayerPieces;
        c1: PlayerPieces;
        p2: PlayerPieces;
        c2: PlayerPieces;
    };
};
const equivalentBoardCases = {
    'empty board': {
        p1: 0b000000000,
        c1: 0b000000000,
        p2: 0b000000000,
        c2: 0b000000000
    },
    'full (invalid) hand': {
        p1: 0b111111111,
        c1: 0b000000000,
        p2: 0b111111111,
        c2: 0b000000000
    },
    'rotation - top row - left column': {
        p1: 0b101000000,
        c1: 0b010000000,
        p2: 0b100000100,
        c2: 0b000100000
    },
    'rotation - 2': {
        p1: 0b100001000,
        c1: 0b000010001,
        p2: 0b000100001,
        c2: 0b100010000
    },
    'vertical symetry - 1': {
        p1: 0b100000110,
        c1: 0b000100001,
        p2: 0b001000011,
        c2: 0b000001100
    },
    'horizontal symetry - 1': {
        p1: 0b101010000,
        c1: 0b010101000,
        p2: 0b000010101,
        c2: 0b000101010
    },
    'not horizontal symetry - 1': {
        p1: 0b101010000,
        c1: 0b010101000,
        p2: 0b010101000,
        c2: 0b101010000
    }
} as BoardCases;

const notEquivalentBoardCases = {
    '1': {
        p1: 0b101010000,
        c1: 0b010101000,
        p2: 0b010101000,
        c2: 0b101010000
    },
    '2': {
        p1: 0b111111111,
        c1: 0b000000000,
        p2: 0b000000000,
        c2: 0b111111111
    }
} as BoardCases;

describe('boardAreEquivalent', () => {
    it('should detect equivalent board', () => {
        for (const test of Object.keys(equivalentBoardCases) as string[]) {
            const { p1, c1, p2, c2 } = equivalentBoardCases[test];
            const b1 = { player: p1, computer: c1 };
            const b2 = { player: p2, computer: c2 };
            it(test, () => {
                expect(boardAreEquivalent(b1, b2)).toBe(true);
            });
        }
    });

    it('should detect not equivalent board', () => {
        for (const test of Object.keys(notEquivalentBoardCases) as string[]) {
            const { p1, c1, p2, c2 } = notEquivalentBoardCases[test];
            const b1 = { player: p1, computer: c1 };
            const b2 = { player: p2, computer: c2 };
            it(test, () => {
                expect(boardAreEquivalent(b1, b2)).toBe(false);
            });
        }
    });
});

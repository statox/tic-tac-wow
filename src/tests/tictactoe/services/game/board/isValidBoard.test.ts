import { isValidBoard, type PlayerPieces } from 'src/libs/services/tictactoe';
import { describe, expect, it } from 'vitest';

const cases = {
    'Valid 1': {
        player: 0b000000000,
        comput: 0b000000000,
        result: true
    },
    'Valid 2': {
        player: 0b111000000,
        comput: 0b000111000,
        result: true
    },
    'Valid 3': {
        player: 0b100100100,
        comput: 0b010010010,
        result: true
    },
    'Valid 4': {
        player: 0b110000011,
        comput: 0b001101100,
        result: true
    },
    'Invalid 1': {
        player: 0b100000000,
        comput: 0b011111111,
        result: false
    },
    'Invalid 2': {
        player: 0b111110000,
        comput: 0b000000111,
        result: false
    },
    'Invalid 3': {
        player: 0b100000000,
        comput: 0b100000000,
        result: false
    }
} as {
    [key: string]: {
        player: PlayerPieces;
        comput: PlayerPieces;
        result: boolean;
    };
};
describe('isValidBoard', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { player, comput, result } = cases[test];
        it(test, () => {
            expect(isValidBoard({ player, computer: comput })).toBe(result);
        });
    }
});

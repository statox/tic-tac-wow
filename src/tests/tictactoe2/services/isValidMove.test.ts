import { isValidMove, type BoardCoord, type PlayerPieces } from 'src/libs/services/tictactoe2';
import { describe, expect, it } from 'vitest';

const cases = {
    'Valid 1': {
        player: 0b000000000,
        comput: 0b000000000,
        move: { x: 0, y: 0 },
        result: true
    },
    'Valid 2': {
        player: 0b111000000,
        comput: 0b000111000,
        move: { x: 0, y: 2 },
        result: true
    },
    'Valid 3': {
        player: 0b100100100,
        comput: 0b010010010,
        move: { x: 2, y: 1 },
        result: true
    },
    'Valid 4': {
        player: 0b110000011,
        comput: 0b001101100,
        move: { x: 1, y: 1 },
        result: true
    },
    'Invalid 4': {
        player: 0b100000000,
        comput: 0b011111111,
        move: { x: 0, y: 0 },
        result: false
    },
    'Invalid 5': {
        player: 0b100000000,
        comput: 0b011111111,
        move: { x: 1, y: 0 },
        result: false
    },
    'Invalid on invalid board': {
        player: 0b100000000,
        comput: 0b100000000,
        move: { x: 0, y: 0 },
        result: false
    }
} as {
    [key: string]: {
        player: PlayerPieces;
        comput: PlayerPieces;
        move: BoardCoord;
        result: boolean;
    };
};
describe('isValidMove', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { player, comput, move, result } = cases[test];
        it(test, () => {
            expect(isValidMove({ player, computer: comput }, move)).toBe(result);
        });
    }
});

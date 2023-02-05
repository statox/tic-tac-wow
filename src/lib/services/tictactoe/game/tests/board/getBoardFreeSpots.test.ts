import { getBoardFreeSpots, type PlayerPieces } from '$lib/services/tictactoe';
import { describe, expect, it } from 'vitest';

const cases = {
    'empty board': {
        player: 0b000000000,
        comput: 0b000000000,
        result: [8, 7, 6, 5, 4, 3, 2, 1, 0]
    },
    'only one piece in first position': {
        player: 0b100000000,
        comput: 0b000000000,
        result: [7, 6, 5, 4, 3, 2, 1, 0]
    },
    'only one piece in position 3': {
        player: 0b000001000,
        comput: 0b000000000,
        result: [8, 7, 6, 5, 4, 2, 1, 0]
    },
    'only one piece in position 0': {
        player: 0b000000001,
        comput: 0b000000000,
        result: [8, 7, 6, 5, 4, 3, 2, 1]
    },
    '4 available - 1': {
        player: 0b100000100,
        comput: 0b000110001,
        result: [7, 6, 3, 1]
    },
    '4 available - 2': {
        player: 0b010100100,
        comput: 0b001010000,
        result: [8, 3, 1, 0]
    },
    '1 available first': {
        player: 0b001010101,
        comput: 0b010101010,
        result: [8]
    },
    '1 available last': {
        player: 0b101010100,
        comput: 0b010101010,
        result: [0]
    },
    '0 available': {
        player: 0b111110000,
        comput: 0b000001111,
        result: []
    }
} as {
    [key: string]: {
        player: PlayerPieces;
        comput: PlayerPieces;
        result: number[];
    };
};

describe('getBoardFreeSpots', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { player, comput, result } = cases[test];
        it(test, () => {
            expect(
                getBoardFreeSpots({ player, computer: comput }).sort((a, b) => a - b)
            ).toStrictEqual(result.sort((a, b) => a - b));
        });
    }
});

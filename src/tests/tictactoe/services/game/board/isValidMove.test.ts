import { isValidMove, type PlayerPieces } from 'src/libs/services/tictactoe';
import { describe, expect, it } from 'vitest';
import {
    BOTTOM_LEFT_INDEX,
    CENTER_INDEX,
    RIGHT_INDEX,
    TOP_INDEX,
    TOP_LEFT_INDEX
} from '../helpers';

const cases = {
    'Valid 1': {
        player: 0b000000000,
        comput: 0b000000000,
        move: TOP_LEFT_INDEX,
        result: true
    },
    'Valid 2': {
        player: 0b111000000,
        comput: 0b000111000,
        move: BOTTOM_LEFT_INDEX,
        result: true
    },
    'Valid 3': {
        player: 0b100100100,
        comput: 0b010010010,
        move: RIGHT_INDEX,
        result: true
    },
    'Valid 4': {
        player: 0b110000011,
        comput: 0b001101100,
        move: CENTER_INDEX,
        result: true
    },
    'Invalid 4': {
        player: 0b100000000,
        comput: 0b011111111,
        move: TOP_LEFT_INDEX,
        result: false
    },
    'Invalid 5': {
        player: 0b100000000,
        comput: 0b011111111,
        move: TOP_INDEX,
        result: false
    },
    'Invalid on invalid board': {
        player: 0b100000000,
        comput: 0b100000000,
        move: TOP_LEFT_INDEX,
        result: false
    }
} as {
    [key: string]: {
        player: PlayerPieces;
        comput: PlayerPieces;
        move: number;
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

import { getGameState, type GameState, type PlayerPieces } from '$lib/services/tictactoe';
import { describe, expect, it } from 'vitest';

const cases = {
    'Not over 1': {
        player: 0b000000000,
        comput: 0b000000000,
        result: 'not_over'
    },
    'Not over 2': {
        player: 0b100000100,
        comput: 0b000110001,
        result: 'not_over'
    },
    'Player win 1': {
        player: 0b100100100,
        comput: 0b001010001,
        result: 'player_win'
    },
    'Player win 2': {
        player: 0b101010101,
        comput: 0b010101010,
        result: 'player_win'
    },
    'Computer win 1': {
        player: 0b101110000,
        comput: 0b010000111,
        result: 'computer_win'
    },
    'Computer win 2': {
        player: 0b110010000,
        comput: 0b001101001,
        result: 'computer_win'
    },
    'Draw 1': {
        player: 0b111000000,
        comput: 0b000000111,
        result: 'draw'
    },
    'Draw 2': {
        player: 0b010010010,
        comput: 0b001001001,
        result: 'draw'
    },
    'Over 1': {
        player: 0b100011010,
        comput: 0b011100101,
        result: 'over'
    },
    'Invalid 1': {
        player: 0b010010010,
        comput: 0b011001001,
        result: 'invalid_board'
    },
    'Invalid ignore 1': {
        player: 0b010000000,
        comput: 0b011101001,
        ignoreInvalid: true,
        result: 'computer_win'
    }
} as {
    [key: string]: {
        player: PlayerPieces;
        comput: PlayerPieces;
        ignoreInvalid?: boolean;
        result: GameState;
    };
};

describe('getGameState', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { player, comput, ignoreInvalid, result } = cases[test];
        it(test, () => {
            expect(getGameState({ player, computer: comput }, ignoreInvalid)).toBe(result);
        });
    }
});

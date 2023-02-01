import { getGameState, type GameState } from 'src/libs/services/bigtactoe';
import { describe, expect, it } from 'vitest';

const cases = {
    'Not over 1': {
        board: '1020001200210021',
        result: 'not_over'
    },
    'Not over 2': {
        board: '0120201102002010',
        result: 'not_over'
    },
    'Player win 1': {
        board: '1111020002020200',
        result: 'player_win'
    },
    'Player win 2': {
        board: '0220111100220000',
        result: 'player_win'
    },
    'Computer win 1': {
        board: '1200020002100211',
        result: 'computer_win'
    },
    'Computer win 2': {
        board: '1102002012002100',
        result: 'computer_win'
    },
    'Draw 1': {
        board: '1111000000002222',
        result: 'draw'
    },
    'Draw 2': {
        board: '1200120012001200',
        result: 'draw'
    },
    'Draw 3': {
        board: '1212212112122121',
        result: 'draw'
    },
    'Over 1': {
        board: '1212212111222121',
        result: 'over'
    },
    'Invalid 1': {
        board: '1111112200000000',
        result: 'invalid_board'
    },
    'Invalid ignore 1': {
        board: '0002000200020102',
        ignoreInvalid: true,
        result: 'computer_win'
    }
} as {
    [key: string]: {
        board: string;
        ignoreInvalid?: boolean;
        result: GameState;
    };
};

describe('getGameState', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { board, ignoreInvalid, result } = cases[test];
        it(test, () => {
            expect(getGameState([...board].map(Number), ignoreInvalid)).toBe(result);
        });
    }
});

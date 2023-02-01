import { Player, playerAligned4 } from 'src/libs/services/bigtactoe';
import { describe, expect, it } from 'vitest';

const cases = {
    'Row 1 - Simple': {
        board: '1111000000000000',
        player: 1,
        result: true
    },
    'Row 2': {
        board: '0020111100002000',
        player: 1,
        result: true
    },
    'Row 3 + NW/SE': {
        board: '2010020022221002',
        player: 2,
        result: true
    },
    'None 1': {
        board: '2010000021221002',
        player: 2,
        result: false
    }
} as {
    [key: string]: {
        board: string;
        player: Player;
        result: boolean;
    };
};

describe('playerAligned3', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { board, player, result } = cases[test];
        it(test, () => {
            expect(playerAligned4([...board].map(Number), player)).toBe(result);
        });
    }
});

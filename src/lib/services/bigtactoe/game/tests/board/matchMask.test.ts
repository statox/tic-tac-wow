import { matchMask, Player } from '$lib/services/bigtactoe';
import { describe, expect, it } from 'vitest';

const cases = {
    'Simple match 1': {
        board: '1111010210200012',
        mask_: 0b0000000000001111,
        player: 1,
        result: true
    },
    'Simple match 2': {
        board: '2222020120100021',
        mask_: 0b0000000000001111,
        player: 2,
        result: true
    },
    'Not match 1': {
        board: '2222020120100021',
        mask_: 0b1111000000000000,
        player: 1,
        result: false
    },
    'Not match 2': {
        board: '2202020120100021',
        mask_: 0b1111000000000000,
        player: 2,
        result: false
    }
} as {
    [key: string]: {
        board: string;
        mask_: number;
        player: Player;
        result: boolean;
    };
};
describe('matchMask', () => {
    for (const test of Object.keys(cases) as string[]) {
        const { board, mask_, player, result } = cases[test];
        it(test, () => {
            expect(matchMask([...board].map(Number), player, mask_)).toBe(result);
        });
    }
});

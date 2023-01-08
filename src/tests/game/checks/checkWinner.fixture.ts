import type { PieceStack } from 'src/libs/services/game';
import type { State } from 'src/libs/services/game/state-machine';

type CheckWinnerCase = {
    name: string;
    expectedState: State;
    grid: PieceStack[][];
};
export const cases: CheckWinnerCase[] = [
    {
        name: 'Should find a winner - horizontal line',
        expectedState: {
            player: 1,
            action: 'winner'
        },
        grid: [
            [[1], [1], [2]],
            [[], [], []],
            [[], [], []]
        ]
    },
    {
        name: 'Should find a winner - vertical line',
        expectedState: {
            player: 1,
            action: 'winner'
        },
        grid: [
            [[1], [-2], [2]],
            [[1], [], []],
            [[2], [], []]
        ]
    },
    {
        name: 'Should find a winner - NW/SE diagonal line',
        expectedState: {
            player: 1,
            action: 'winner'
        },
        grid: [
            [[1], [-2], [2]],
            [[], [1], []],
            [[], [], [2]]
        ]
    },
    {
        name: 'Should find a winner - NE/SW diagonal line',
        expectedState: {
            player: 2,
            action: 'winner'
        },
        grid: [
            [[1], [-2], [-2]],
            [[], [-1], []],
            [[-3], [], [2]]
        ]
    },
    {
        name: 'Should find a winner - Stack horizontal',
        expectedState: {
            player: 1,
            action: 'winner'
        },
        grid: [
            [
                [-1, 2],
                [-1, 2],
                [-2, 3]
            ],
            [[], [-1], []],
            [[-3], [], [2]]
        ]
    },
    {
        name: 'Should find a winner - Stack vertical',
        expectedState: {
            player: 2,
            action: 'winner'
        },
        grid: [
            [[-1, 2, -3], [], []],
            [[1, -2], [-1], []],
            [[-3], [], [2]]
        ]
    },
    {
        name: 'Should not find a winner 1',
        expectedState: {
            player: 1,
            action: 'select1'
        },
        grid: [
            [[-1, 2, 3], [], []],
            [[1, -2], [-1], []],
            [[-3], [], [2]]
        ]
    },
    {
        name: 'Should not find a winner 2',
        expectedState: {
            player: 1,
            action: 'select1'
        },
        grid: [
            [
                [-1, 2, 3],
                [1, 2, -3],
                [-1, -2, 3]
            ],
            [[1, -2], [-1], []],
            [[-3], [], [2]]
        ]
    },
    {
        name: 'Should detect a draw',
        expectedState: {
            player: 1,
            action: 'draw'
        },
        grid: [
            [[2], [1], [1]],
            [[-2], [-1], [-1]],
            [[], [], []]
        ]
    }
];

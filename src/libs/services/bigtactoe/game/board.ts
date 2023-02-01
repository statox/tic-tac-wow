import type { Board } from './types';

export const getNewBoard = (): Board => {
    return new Array(16).fill(0);
};

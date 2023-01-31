import type { Board } from './type';

export const getNewBoard = (): Board => {
    return new Array(16).fill(0);
};

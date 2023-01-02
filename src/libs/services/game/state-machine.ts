// State
//
// Player 1 - Select piece in hand or select board cell
// Player 1 - Select destination cell on board
// Check end
// Player 2 - Select piece in hand or select board cell
// Player 2 - Select destination cell on board
// Check end

import type { Player } from './types';
export type StateAction = 'select1' | 'select2';

export type State = {
    player: Player;
    action: StateAction;
};

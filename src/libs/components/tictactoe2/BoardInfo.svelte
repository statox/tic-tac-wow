<script lang="ts">
    import { getGameState, type Board } from '../../services/tictactoe2';

    export let board: Board;
</script>

<div>
    <h4>Board info</h4>
    {#if board}
        <span>State: {getGameState(board)}</span>
    {/if}
</div>

<script lang="ts">
    import { getContext } from 'svelte';
    import type { Game } from '../services/game';
    import GameHistory from './GameHistory.svelte';
    const { open } = getContext('simple-modal');
    const showHistory = () => open(GameHistory, { game });

    export let game: Game;
</script>

<button on:click={showHistory}>Show game history</button>

<script lang="ts">
    import { getContext } from 'svelte';
    import type { Game } from '../../services/gobblet';
    import GameHistory from './GameHistory.svelte';
    // Bug is mentioned here, proposed solution didn't fix things
    // https://github.com/flekschas/svelte-simple-modal/issues/88
    // Using trick of casting to any first to stop typescript erroring
    const context: any = getContext('simple-modal');
    const { open } = context;
    const showHistory = () => open(GameHistory, { game });

    export let game: Game;
</script>

<button on:click={showHistory}>Show game history</button>

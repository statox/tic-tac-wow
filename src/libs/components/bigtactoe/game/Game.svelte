<script lang="ts">
    import { getNewBoard } from '../../../services/bigtactoe';
    import BoardCanvas from './BoardCanvas.svelte';

    const board = getNewBoard();

    const onClick = () => console.log('click');
</script>

<BoardCanvas {board} dimensionPx={{ width: 400, height: 400 }} {onClick} highlightMouse={true} />

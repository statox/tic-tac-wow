<script lang="ts">
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import Game from './game/Game.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Big Tac Toe</Tab>
    </TabList>

    <TabPanel>
        <Game />
    </TabPanel>
</Tabs>

<style>
    :global(.svelte-tabs li.svelte-tabs__tab) {
        color: white;
    }
    :global(.svelte-tabs li.svelte-tabs__selected) {
        background-color: var(--nc-lk-1);
        border-radius: 3%;
    }
</style>

<script lang="ts">
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import Game from './Game.svelte';
    import Generator from './Generator.svelte';
    import Analyzer from './Analyzer.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Game</Tab>
        <Tab>Generator</Tab>
        <Tab>Analyzer</Tab>
    </TabList>

    <TabPanel>
        <Game />
    </TabPanel>

    <TabPanel>
        <Generator />
    </TabPanel>

    <TabPanel>
        <Analyzer />
    </TabPanel>
</Tabs>

<style>
    :global(.svelte-tabs li.svelte-tabs__tab) {
        color: white;
    }
    :global(.svelte-tabs li.svelte-tabs__selected) {
        background-color: #92a4fc;
        border-radius: 3%;
    }
</style>

<script lang="ts">
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    import Game from './Game.svelte';
    import Analyzer from './Analyzer.svelte';
</script>

<Tabs>
    <TabList>
        <Tab>Game</Tab>
        <Tab>Analyzer</Tab>
    </TabList>

    <TabPanel>
        <Game />
    </TabPanel>

    <TabPanel>
        <Analyzer />
    </TabPanel>
</Tabs>

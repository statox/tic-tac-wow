import resolve from '@rollup/plugin-node-resolve';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [
        sveltekit(),
        // The resolve configuration comes from https://github.com/flekschas/svelte-simple-modal
        resolve({
            dedupe: ['svelte', 'svelte/transition', 'svelte/internal']
        })
    ],
    test: {}
};

export default config;

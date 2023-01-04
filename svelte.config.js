import adapter from 'svelte-adapter-github';
import { vitePreprocess } from '@sveltejs/kit/vite';

const prod = process.env.ENV === 'prod';

console.log('In svelte.config.js');
console.log({ prod });

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: null,
            precompress: false,
            domain: '',
            jekyll: false,
            paths: {
                base: prod ? '/tic-tac-wow' : ''
            }
        })
    }
};

export default config;

import { sveltekit } from '@sveltejs/kit/vite';
import { telefunc } from 'telefunc/vite'
import type { UserConfig } from 'vite';
import myPlugin from './telefunc-svelte-vite-plugin';

const config: UserConfig = {
	plugins: [telefunc(), sveltekit(), myPlugin()]
};

export default config;

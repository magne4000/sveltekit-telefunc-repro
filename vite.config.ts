import { sveltekit } from '@sveltejs/kit/vite';
import { telefunc } from 'telefunc/vite'
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [telefunc(), sveltekit()]
};

export default config;

import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// alias is not just for types here, it must only appear in tsconfig
		// alias: {
		// 	'$telefunc': 'src/telefunc/*'
		// },
		adapter: adapter()
	}
};

export default config;

<script>
  import { test3 } from "$lib/server/test3.telefunc";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => test3('OK').then(console.log).catch(console.error)}>Test</button>

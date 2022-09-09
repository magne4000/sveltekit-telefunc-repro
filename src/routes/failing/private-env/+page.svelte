<script>
  import { test2 } from "$lib/test2.telefunc";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => test2('OK').then(console.log).catch(console.error)}>Test</button>

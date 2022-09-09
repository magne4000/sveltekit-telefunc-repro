<script>
  import { test1 } from "$lib/test1.telefunc";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => test1('OK').then(console.log).catch(console.error)}>Test</button>

<script>
  import { test10 } from "$telefunc/test10.telefunc";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => test10('OK').then(console.log).catch(console.error)}>Plugin</button>

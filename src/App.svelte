<script>
  import Age from './Age.svelte'
  let feeling
	export let C
</script>

<main>
  {#if feeling}
  <h1>Hi {feeling}, I'm dad!</h1>
  {/if}
  <p>How are you feeling today?</p>
  <input bind:value={feeling}>
  <!-- <Age age={C.age} /> -->
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
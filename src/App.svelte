<script>
  import Main from './Main.svelte'
  import Prestart from './Prestart.svelte'
  import Start from './Start.svelte'
  export let C
  import {
    gameState
  } from './stores'
  console.log($gameState)
</script>

<main>
  {#if $gameState === C.gameStates.prestart}
    <Prestart/>
  {/if}

  {#if $gameState === C.gameStates.setup}
    <Start/>
  {/if}

  {#if $gameState === C.gameStates.main}
    <Main/>
  {/if}

	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
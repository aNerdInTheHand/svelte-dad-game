<script>
  import Main from './Main.svelte'
  import Prestart from './Prestart.svelte'
  import Setup from './setup/Setup.svelte'
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
    <Setup/>
  {/if}

  {#if $gameState === C.gameStates.main}
    <Main/>
  {/if}

	<p class='footer'>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
    max-width: 240px;
		margin: 0 auto;
    padding: 1em;
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

  .footer {
    position: fixed;
    bottom: 0;
  }
</style>
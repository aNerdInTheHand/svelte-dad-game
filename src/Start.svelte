<script>
  import C from './constants'
  import {
    gameState,
    name
  } from './stores'
</script>

<h2>Ok, let's get this show on the road!</h2>
<p>Tell me your name. No jokes, I promise.</p>

<input bind:value={$name} />

<button
  on:click={() => gameState.update(g => g = C.gameStates.main)}
  disabled={!$name}
  type=submit
>
  Submit
</button>
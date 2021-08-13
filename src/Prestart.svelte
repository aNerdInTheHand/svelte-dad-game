<script>
  import C from './constants'
  import {
    feeling,
    gameState,
    jokeGreeting
  } from './stores'
  let answered = false
</script>

<h1>Welcome to the dad game!</h1>
  <p>Let's get started.</p>
  <p>How are you feeling today?</p>

  <form on:submit|preventDefault={() => answered = true}>
    <select bind:value={$feeling}>
      {#each C.feelings as f}
        <option value={f}>
          {f}
        </option>
      {/each}
    </select>
  
    <button disabled={!$feeling} type=submit>
      Submit
    </button>
  </form>
  
  {#if answered}
    <h2>{$jokeGreeting}</h2>
    <button on:click={() => gameState.update(g => g = C.gameStates.setup)}>
      That's not funny.
    </button>
  {/if}
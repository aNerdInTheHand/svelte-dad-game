import { writable, derived } from 'svelte/store';
import C from './constants'

export const name = writable('');
export const feeling = writable('')
export const gameState = writable(C.gameStates.prestart)

export const greeting = derived(
	name,
	$name => `Hi ${$name}, I'm dad!`
);

export const jokeGreeting = derived(
  feeling,
  $feeling => `Hi ${$feeling.toLocaleLowerCase()}, I'm dad!`
)
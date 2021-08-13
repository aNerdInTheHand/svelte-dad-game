import App from './App.svelte';
import C from './constants'

const app = new App({
	target: document.body,
	props: {
		C
	}
});

export default app;
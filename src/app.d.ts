// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		userid: string;
	}

	// interface Platform {}

	interface PrivateEnv {
		VITE_GH_TOKEN: string
	}

	// interface PublicEnv {}
}

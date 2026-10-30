// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			translations?: Record<string, string>;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

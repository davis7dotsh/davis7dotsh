import { fromThrowable, ok, type Result } from 'neverthrow';

export type StorageError = 'storage unavailable' | 'invalid json';

function attempt<T>(run: () => T, error: StorageError) {
	return fromThrowable(run, () => error)();
}

export function readStoredJson(key: string): Result<unknown, StorageError> {
	return attempt(() => localStorage.getItem(key), 'storage unavailable').andThen((raw) =>
		raw === null ? ok<unknown, StorageError>(null) : attempt(() => JSON.parse(raw), 'invalid json')
	);
}

export function writeStoredJson(key: string, value: unknown): Result<void, StorageError> {
	return attempt(() => JSON.stringify(value), 'invalid json').andThen((raw) =>
		attempt(() => localStorage.setItem(key, raw), 'storage unavailable')
	);
}

/**
 * Memoization decorator.
 */
 export const memoize = <T extends (...args: unknown[]) => unknown>(fn: T) => {
	const cache = new Map<string, ReturnType<T>>();

	return (...args: Parameters<T>): ReturnType<T> => {
		const argsString = JSON.stringify(args);

		if (cache.has(argsString)) {
			return cache.get(argsString);
		} else {
			const result = fn(...args) as ReturnType<T>;
			cache.set(argsString, result);
			return result;
		}
	};
};

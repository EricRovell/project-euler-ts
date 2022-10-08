/**
 * Generates a number sequence: [ a; b ).
 */
export function* range(start: number, end?: number, step = 1): Generator<number> {
	if (typeof end === "undefined") {
		end = start;
		start = 0;
	}

	if ((step > 0 && start >= end) || (step < 0 && start <= end)) {
		return [];
	}

	for (let i = start; step > 0 ? (i < end) : (i > end); i += step) {
		yield i;
	}
}

/**
 * Infinite integer sequence generator.
 *
 * ! Do not forget to use `.return()` when generator is not needed anymore.
 */
export function* counter(start = 0, step = 1): Generator<number, void> {
	let count = start;
	yield count;

	while (true) {
		count += step;
		yield count;
	}
}

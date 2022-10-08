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

/**
 * Returns the Greatest Common Divisor for two natural numbers.
 */
const _gcd = (a: number, b: number): number => {
	a = Math.abs(a);
	b = Math.abs(b);

	if (b > a) {
		[ a, b ] = [ b, a ];
	}

	while (b) {
		[ a, b ] = [ b, a % b ];
	}

	return a;
};

/**
 * Returns the Least Common Multiple for two natural numbers.
 */
const _lcm = (a: number, b: number): number => {
	return a * b / _gcd(a, b);
};

/**
 * Returns the Greatest Common Divisor of natural numbers.
 */
export const gcd = (...numbers: number[]) => {
	return numbers.reduce((acc, curr) => _gcd(acc, curr));
};

/**
 * Returns the Least Common Multiple of natural numbers.
 */
export const lcm = (...numbers: number[]) => {
	return numbers.reduce((acc, curr) => _lcm(acc, curr));
};

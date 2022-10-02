/**
 * Project Euler #6: O(1) solution using arithmetic approach.
 * The formula derived from arithmetic sum and sum of squares difference.
 */
export const main = (n: number): number => {
	return n * (n ** 2 - 1) * (3 * n + 2) / 12;
};

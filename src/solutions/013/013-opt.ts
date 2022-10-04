import { readFileSync } from "node:fs";

/**
 * Project Euler #13: Optimized solution.
 * Since the required answer required only the first `n` digits of the sum,
 * the is no need to add more than the first `n + 1` digits of each number.
 */
export const main = (digits = 10): number => {
	const numbers = readFileSync("src/solutions/013/data-013.txt", { encoding: "utf-8" })
		.split(/[\n]/g)
		.filter(Boolean)
		.map(str => Number(str.slice(0, digits + 1)));

	const result = numbers
		.reduce((acc, curr) => acc + curr)
		.toString()
		.slice(0, digits);

	return Number(result);
};

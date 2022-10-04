import { readFileSync } from "node:fs";

/**
 * Project Euler #13: Brute force solution.
 * As the resulting number may be huge, `BigInt` is used.
 */
export const main = (digits = 10): number => {
	const numbers = readFileSync("src/solutions/013/data-013.txt", { encoding: "utf-8" })
		.split(/[\n]/g)
		.filter(Boolean)
		.map(BigInt);

	const sum = numbers.reduce((acc, curr) => acc + curr);
	const result = sum.toString().slice(0, digits);
	return Number(result);
};

import { readFileSync } from "node:fs";

/**
 * Project Euler #8: Brute force solution.
 */
export const main = (adjacent: number): number => {
	let productMax = 0;
	const digits = readFileSync("src/solutions/008/data-008.txt", { encoding: "utf-8" })
		.replace(/[\n\r]/g, "")
		.split("")
		.map(Number);

	for (let i = 0; i < digits.length - adjacent + 1; i++) {
		const product = digits
			.slice(i, i + adjacent)
			.reduce((acc, curr) => acc * curr);
		productMax = Math.max(product, productMax);
	}

	return productMax;
};

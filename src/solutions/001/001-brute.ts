/**
 * Project Euler #1: Brute force solution.
 */
export const main = (limit: number): number => {
	let total = 0;

	for (let number = 0; number < limit; number++) {
		if (number % 3 == 0 || number % 5 == 0) {
			total += number;
		}
	}

	return total;
};

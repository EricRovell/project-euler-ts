/**
 * Project Euler #6: Brute force solution.
 */
export const main = (limit: number): number => {
	let sum = 0;
	let sqSum = 0;

	for (let int = 0; int <= limit; int++) {
		sum += int;
		sqSum += int ** 2;
	}

	return sum ** 2 - sqSum;
};

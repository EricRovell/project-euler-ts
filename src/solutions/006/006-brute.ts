/**
 * Project Euler #6: Brute force solution.
 */
export const main = (n: number): number => {
	let sum = 0;
	let sqSum = 0;

	for (let int = 0; int <= n; int++) {
		sum += int;
		sqSum += int ** 2;
	}

	return sum ** 2 - sqSum;
};

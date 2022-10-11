import { range } from "../../lib";

/**
 * Project Euler #10: Iterative solution
 */
export const main = (limit: number): number => {
	if (limit <= 3) {
		return 2;
	}

	let count = 2;

	for (const int of range(3, limit, 2)) {
		let prime = true;
		const boundary = Math.floor(Math.sqrt(int) + 1);

		for (let i = 3; i < boundary; i += 2) {
			if (int % i === 0) {
				prime = false;
				break;
			}
		}

		if (prime) {
			count += int;
		}
	}

	return count;
};

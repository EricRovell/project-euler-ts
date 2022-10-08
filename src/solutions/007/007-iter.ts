import { counter } from "../../lib";

/**
 * Project Euler #7: Iterative solution
 */
export const main = (n: number): number => {
	if (n === 1) {
		return 2;
	}

	let primeCount = 1;
	const sequence = counter(3, 2);

	for (const int of sequence) {
		let prime = true;
		const boundary = Math.floor(Math.sqrt(int) + 1);

		for (let i = 3; i < boundary; i += 2) {
			if (int % i === 0) {
				prime = false;
				break;
			}
		}

		if (prime) {
			primeCount += 1;
		}

		if (primeCount === n) {
			void sequence.return();
			return int;
		}
	}
};

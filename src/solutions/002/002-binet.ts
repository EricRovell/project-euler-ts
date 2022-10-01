/**
 * Calculates the n-th fibonacci number using the Binet formula.
 * The sequence starts from 0, 1...
 */
const binet = (index: number): number => {
	const sq5 = Math.sqrt(5);
	const phi = (1 + sq5) / 2;
	const Phi = (1 - sq5) / 2;

	return Math.round(
		(1 / sq5) * (phi ** index - Phi ** index)
	);
};

/**
 * Binet based fibonacci sequence infinite generator.
 */
function* fibonacci(start = 0) {
	while (true) {
		yield binet(start);
		start++;
	}
}

/**
 * Project Euler #2: Binet formula solution.
 */
export const main = (limit: number): number => {
	let sum = 0;
	const sequence = fibonacci();
	for (const number of sequence) {
		if (number < limit) {
			if (number % 2 === 0) {
				sum += number;
			}
		} else {
			sequence.return();
		}
	}

	return sum;
};

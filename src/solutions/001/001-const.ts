/**
 * Calculates the arithmetic series sum up till the limit:
 * 
 * factor, 2 * factor, 3 * factor ... limit
 */
const getSeriesSum = (factor: number, limit: number): number => {
	const last = Math.floor((limit - 1) / factor);
	return factor * (1 + last) * last / 2;
};

/**
 * Project Euler #1: O(1) solution using arithmetic series.
 */
export const main = (limit: number): number => {
	return (
		getSeriesSum(3, limit) +
		getSeriesSum(5, limit) -
		getSeriesSum(3 * 5, limit)
	);
};

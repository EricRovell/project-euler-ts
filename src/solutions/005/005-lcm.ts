import { lcm, range } from "../../lib";

/**
 * Project Euler #5: LCM solution.
 */
export const main = (n: number): number => {
	return lcm(...range(1, n + 1));
};

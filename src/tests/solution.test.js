import { describe, expect, it } from "vitest";
import glob from "glob";
import { testdata } from "./test-data";

/**
 * Test all Project Euler solutions:
 * 
 * Dynamically import all solutions using glob import,
 * test different solutions for each problem.
 */
for (const [ problem, data ] of Object.entries(testdata)) {
	describe(`Project Euler #${problem} solutions`, async () => {
		try {
			const solutions = glob.sync(`src/solutions/${problem}/*.ts`);
			for await (const solution of solutions) {
				const { main } = await import(solution);
				// All import paths are the same, get the `type` name of solution
				// "src/solutions/${problem}/${problem}-${type}.ts" -> ${type}
				const type = solution.slice(22, -3);
				it(`Problem #${problem}: ${type} solution`, () => {
					for (const { input, output } of data) {
						expect(main(input)).toBe(output);
					}
				});
			}
		} catch (error) {
			console.error(error.message);
		}
	});
}

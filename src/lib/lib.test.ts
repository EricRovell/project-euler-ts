import { describe, expect, it } from "vitest";
import { counter, range } from "./index";

describe("Lib test", () => {
	it("counter: no arguments", () => {
		const generator = counter();
		expect(generator.next().value).toEqual(0);
		expect(generator.next().value).toEqual(1);
		expect(generator.next().value).toEqual(2);
		expect(generator.next().value).toEqual(3);
		generator.return();
	});
	it("counter: start argument only", () => {
		const generator = counter(10);
		expect(generator.next().value).toEqual(10);
		expect(generator.next().value).toEqual(11);
		expect(generator.next().value).toEqual(12);
		expect(generator.next().value).toEqual(13);
		generator.return();
	});
	it("counter: start & step arguments", () => {
		const generator = counter(17, 5);
		expect(generator.next().value).toEqual(17);
		expect(generator.next().value).toEqual(22);
		expect(generator.next().value).toEqual(27);
		expect(generator.next().value).toEqual(32);
		generator.return();
	});
	it("range", () => {
		expect([ ...range(4) ]).toEqual([ 0, 1, 2, 3 ]);
		expect([ ...range(3, 6) ]).toEqual([ 3, 4, 5 ]);
		expect([ ...range(0, 10, 2) ]).toEqual([ 0, 2, 4, 6, 8 ]);
		expect([ ...range(10, 0, -1) ]).toEqual([ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]);
		expect([ ...range(8, 2, -2) ]).toEqual([ 8, 6, 4 ]);
		expect([ ...range(8, 2) ]).toEqual([]);
		expect([ ...range(8, 2, 2) ]).toEqual([]);
		expect([ ...range(1, 5, -1) ]).toEqual([]);
		expect([ ...range(1, 5, -2) ]).toEqual([]);
	});
});

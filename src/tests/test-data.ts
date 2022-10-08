interface TestData {
	[key: `${number}`]: {
		input: number,
		output: number
	}[]
}

export const testdata: TestData = {
	"001": [
		{
			input: 10,
			output: 23
		},
		{
			input: 1000,
			output: 233168
		}
	],
	"002": [
		{
			input: 100,
			output: 44
		},
		{
			input: 4000000,
			output: 4613732
		}
	],
	"006": [
		{
			input: 10,
			output: 2640
		},
		{
			input: 100,
			output: 25164150
		}
	],
	"007": [
		{
			input: 6,
			output: 13
		},
		{
			input: 10001,
			output: 104743
		}
	],
	"008": [
		{
			input: 4,
			output: 5832,
		},
		{
			input: 13,
			output: 23514624000,
		}
	],
	"013": [
		{
			input: 10,
			output: 5537376230
		}
	]
};

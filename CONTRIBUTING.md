# Contributing to Project Euler: Typescript

## Solutions

There are usually several solutions to each problem.
Each solution has a defined filename schema:

`{problem}-{solution-name}.ts`,

where:

- `problem` - is the problem number;
- `solution-name` - short solution method description.

For example, the are a solution to Problem #2 using a binet formula:

`/src/solutions/002/002-binet.ts`.

The schema is important for proper tests run.

## Tests

To run a test use a command: `pnpm run test`.

Solution files are loaded dynamically by filename schema and are tested using `testdata.ts` object containing input and output.

## Code style

Please, do not forget to lint the code using `pnpm run lint` command.

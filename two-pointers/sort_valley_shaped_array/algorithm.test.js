/**
 * A valley-shaped array is an array of integers such that:
 * 1. It can be split into a non-empty prefix and a non-empty suffix.
 * 2. The prefix is sorted in descending order (duplicates allowed), and
 * 3. The suffix is soretd in increasing order (duplicates allowed).
 *
 * Given alley-shaped array, arr, return a new array with the elements sorted.
 */

const { algorithm } = require("./algorithm");

const TEST_CASES = [
    {
        input: [8, 4, 2, 6],
        output: [2, 4, 6, 8],
    },
    {
        input: [1, 2],
        output: [1, 2],
    },
    {
        input: [2, 2, 1, 1],
        output: [1, 1, 2, 2],
    },
];

TEST_CASES.forEach((kase) => {
    describe("when input is " + kase.input, () => {
        it("returns " + kase.output, () => {
            expect(algorithm(kase.input)).toEqual(kase.output);
        });
    });
});

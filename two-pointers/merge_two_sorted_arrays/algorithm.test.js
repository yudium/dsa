/**
 * Given two sorted arrays, arr1 and arr2, return a new array that contains
 * all elements in arr1 and arr2 in sorted order, including duplicates.
 *
 * Example: arr1 = [1, 3, 4, 5], arr2 = [2, 4, 4]
 * Output: [1, 2, 3, 4, 4, 4, 5]
 *
 * Example: arr1 = [-1], arr2 = []
 * Output: [-1]
 */

const { algorithm } = require("./algorithm");

const TEST_CASES = [
    {
        input: {
            arr1: [1, 3, 4, 5],
            arr2: [2, 4, 4],
        },
        output: [1, 2, 3, 4, 4, 4, 5],
    },
    {
        input: {
            arr1: [-1],
            arr2: [],
        },
        output: [-1],
    },
];

TEST_CASES.forEach((kase) => {
    describe(
        "when arr1 is " + kase.input.arr1 + " and arr2 is " + kase.input.arr2,
        () => {
            it("returns " + kase.output, () => {
                expect(algorithm(kase.input.arr1, kase.input.arr2)).toEqual(
                    kase.output
                );
            });
        }
    );
});

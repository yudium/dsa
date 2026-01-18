/**
 * Given three sorted arrays, arr1, arr2, and arr3, return a new array with
 * the elements of all three arrays, in sorted order, without duplicates.
 *
 * Example: arr1 = [2, 3, 3, 4, 5, 7], arr2 = [3, 3, 9], arr3 = [3, 3, 9]
 * Output: [2, 3, 4, 5, 7, 9]
 */

const { algorithm } = require("./algorithm");

const TEST_CASES = [
    {
        input: {
            arr1: [2, 3, 3, 4, 5, 7],
            arr2: [3, 3, 9],
            arr3: [3, 3, 9],
        },
        output: [2, 3, 4, 5, 7, 9],
    },
];

TEST_CASES.forEach((kase) => {
    describe(
        "when arr1 is " +
            kase.input.arr1 +
            " and arr2 is " +
            kase.input.arr2 +
            " and arr3 is " +
            kase.input.arr3,
        () => {
            it("returns " + kase.output, () => {
                expect(
                    algorithm(kase.input.arr1, kase.input.arr2, kase.input.arr3)
                ).toEqual(kase.output);
            });
        }
    );
});

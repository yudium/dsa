/**
 * In this problem, we represent an interval as an array with two integers,
 * [start, end], where start <= end. BOth endpoints are considered part of
 * the interval, whoch may consist of a singular point if start = end.
 *
 * You are given two arrays of intervals, arr1 and arr2. For each array,
 * the intervals are non-overlappign and sorted from left to right. Return
 * a similarly non-overlapping, sort array of intervals representating the
 * intersection of the intervals in arr1 and arr2. An interval should not
 * start at the same value where another interval ends.
 *
 * Example: arr1 = [[0, 1], [4, 6], [7,8]], arr2 = [[2, 3], [5, 9], [10, 11]]
 * Output: [[5, 6], [7, 8]]
 *
 * Example: arr1 = [[2, 4], [5, 8]], arr2 = [[3, 3], [4, 7]]
 * Output: [[3, 3], [4, 4], [5, 7]]. The arra [[3, 3], [4, 4], [5, 6], [6, 7]]
 * would not be correct because [5, 6] and [6, 7] can be combined
 */

const { algorithm } = require("./algorithm");

const TEST_CASES = [
    {
        input: {
            arr1: [[0, 1], [4, 6], [7,8]],
            arr2: [[2, 3], [5, 9], [10, 11]],
        },
        output: [[5, 6], [7, 8]],
    },
    // {
    //     input: {
    //         arr1: [[2, 4], [5, 8]],
    //         arr2: [[3, 3], [4, 7]],
    //     },
    //     output: [[3, 3], [4, 4], [5, 7]],
    // },
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

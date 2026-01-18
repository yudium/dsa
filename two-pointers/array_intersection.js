/**
 * Given two sorted arrays of integers, arr1 and arr2, return a new array
 * with the elements that appear in both arrays, in sorted order, including
 * duplicates present in both arrays.
 *
 * Source: Beyond Cracking the Coding Interview on page 296.
 */

const CASES = [
    {
        input: [
            [1, 2, 3],
            [1, 3, 5],
        ],
        output: [1, 3],
    },
    {
        input: [
            [1, 1, 1],
            [1, 1],
        ],
        output: [1, 1],
    },
];

CASES.forEach((kase) => {
    console.log(commonElements(kase.input[0], kase.input[1]));
});

function commonElements(arr1, arr2) {
    let p1 = 0;
    let p2 = 0;
    const res = [];

    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] === arr2[p2]) {
            res.push(arr1[p1]);
            p1 += 1;
            p2 += 1;
        } else if (arr2[p2] < arr1[p1]) {
            p2 += 1;
        } else {
            p1 += 1;
        }
    }

    return res;
}

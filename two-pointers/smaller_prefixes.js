/**
 * Given an array of integers, arr, where the length, n, is even, return whether
 * the following condition holds for every k in the range 1 <= k <= n/2:
 * "the sum of the first k elements is smaller than the the sum of the first 2k elements".
 * If the condition is fale for any k in the range, return false.
 *
 * Source: Beyond Cracking the Coding Interview on page 295.
 */

const CASES = [
    {
        input: [1, 2, 2, -1],
        output: true,
    },
    {
        input: [1, 2, -2, 1, 3, 5],
        output: false,
    },
];


CASES.forEach((kase) => {
    console.log(smallerPrefixes(kase.input));
});

function smallerPrefixes(arr) {
    let sp = 0;
    let fp = 0;

    let slow_sum = 0;
    let fast_sum = 0;

    while (fp < arr.length) {
        slow_sum += arr[sp];
        fast_sum += arr[fp] + arr[fp + 1];
        if (slow_sum >= fast_sum) {
            return false;
        }
        sp += 1;
        fp += 2;
    }

    return true;
}

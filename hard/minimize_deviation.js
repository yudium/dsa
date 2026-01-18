// HARDEST EVEEER!
// https://www.youtube.com/watch?v=boHNFptxo2A&list=PLQpVsaqBj4RI3jgIzqK7VJHy8Esacg-ow&index=5
//
// MAIN CONCEPT IS TO PUSH ALL NUMBERS TO LEFT AND GRADUALLY INCREASE NUMBER TO RIGHT

const { MinHeap } = require("../datastructure/min_heap");

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function (nums) {
    /**
     * Get minimum version of each numbers
     */
    const min_heap = new MinHeap();
    let max = 0;
    for (const num of nums) {
        temp = num;

        let n = num;
        while (n % 2 === 0) {
            n = n / 2;
        }

        /**
         * Left side is minimum version of number
         * right side is maximum version of number
         */
        min_heap.push([n, Math.max(temp, n * 2)]);
        max = Math.max(max, n); // smallest version of maximum number
    }

    let res = Infinity;
    /**
     * All numbers must be accounted otherwise the solution will be incorrect therefore
     * while condition is specificied as such.
     */
    while (min_heap.getNodesLength() === nums.length) {
        const [n, n_max] = min_heap.pop(); // after pop up it will insert it into heap again if number can be increased
        res = Math.min(res, max - n);

        /**
         * Gradually increase number
         */
        if (n < n_max) {
            min_heap.push([n * 2, n_max]);
            max = Math.max(max, n * 2); // gradually reach to maximum version of maximum number
        }
    }

    return res;
};

console.log("minimumDeviation", minimumDeviation([1, 2, 3, 4]));

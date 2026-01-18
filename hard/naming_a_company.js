/**
 * The algorithm is simply items comparison between to arrays but challenge here is
 * to take key observations from the problem
 *
 * https://www.youtube.com/watch?v=NrHpgTScOcY&list=PLQpVsaqBj4RI3jgIzqK7VJHy8Esacg-ow&index=4
 */

/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function (ideas) {
    const words = {};
    for (const w of ideas) {
        if (!words[w.charAt(0)]) {
            words[w.charAt(0)] = {};
        }
        /**
         * We collect suffix as hashmap, group by prefix of the first letter.
         */
        words[w.charAt(0)][w.slice(1)] = true;
    }

    let count = 0;
    for (const prefix1 in words) {
        for (const prefix2 in words) {
            if (prefix1 === prefix2) {
                continue;
            }

            /**
             * Comparing items between two arrays will typically takes O(n^2) time, unless
             * using hashmap which reduces time complexity to O(n) at the cost of increased space complexity.
             */
            let intersect = 0;
            for (const w in words[prefix1]) {
                if (w in words[prefix2]) {
                    intersect += 1;
                }
            }

            const distinct1 = Object.keys(words[prefix1]).length - intersect;
            const distinct2 = Object.keys(words[prefix2]).length - intersect;

            /**
             * Original formula is: 2 * (distinct1 * distinct2)
             * But since the comparison includes repeated work, therefore the constant is no longer needed
             */
            count += distinct1 * distinct2;
        }
    }

    return count;
};

console.log(distinctNames(["coffee", "donuts", "time", "toffee"]));

console.log(distinctNames(["lack", "back"]));

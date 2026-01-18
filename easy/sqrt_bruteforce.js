/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) {
        return 0;
    }

    if (x === 1) {
        return 1;
    }

    // solution criterias:
    // 1. square of n[i] is equal to x
    // 2. alternatively, square of n[i] is less than x where n[i] is the greatest number of its companion
    let i = 1;
    while (i < x) {
        if (i ** 2 === x) {
            return i;
        }

        if (i ** 2 > x) {
            return i - 1;
        }

        i += 1;
    }

    // when x = 2
    return i - 1;
};

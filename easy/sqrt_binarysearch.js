/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // edge case:
    // 1. x = 0, returns 0
    // 2. x = 1, returns 1

    // solution criterias:
    // 1. square of n[i] is equal to x
    // 2. alternatively, square of n[i] is less than x where n[i] is the greatest number of its companion

    if (x === 0) {
        return 0
    }

    if (x === 1) {
        return 1
    }

    let l = 1;
    let r = x;
    while (r - l > 1) {
        const mid = Math.round((l + r) / 2)

        if (mid**2 <= x) {
            l = mid
        } else {
            r = mid
        }
    }

    return l;
};

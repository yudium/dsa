exports.algorithm = function (arr1, arr2, arr3) {
    let p1 = 0
    let p2 = 0
    let p3 = 0

    const res = []

    while (p1 < arr1.length || p2 < arr2.length || p3 < arr3.length) {
        const lowest = Math.min(
            arr1[p1] ?? Infinity,
            arr2[p2] ?? Infinity,
            arr3[p3] ?? Infinity
        );
        res.push(lowest);

        while (p1 < arr1.length) {
            if (arr1[p1] === lowest) {
                p1 += 1
            } else {
                break;
            }
        }

        while (p2 < arr2.length) {
            if (arr2[p2] === lowest) {
                p2 += 1
            } else {
                break;
            }
        }

        while (p3 < arr3.length) {
            if (arr3[p3] === lowest) {
                p3 += 1
            } else {
                break;
            }
        }
    }

    return res
};

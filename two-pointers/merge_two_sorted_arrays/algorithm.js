exports.algorithm = function (arr1, arr2) {
    let p1 = 0;
    let p2 = 0;

    let res = [];

    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] < arr2[p2]) {
            res.push(arr1[p1]);
            p1 += 1;
        } else if (arr1[p1] > arr2[p2]) {
            res.push(arr2[p2]);
            p2 += 1;
        } else if (arr1[p1] === arr2[p2]) {
            res.push(arr1[p1]);
            p1 += 1;
        }
    }

    while (p1 < arr1.length) {
        res.push(arr1[p1])
        p1 += 1
    }

    while (p2 < arr2.length) {
        res.push(arr1[p1])
        p1 += 1
    }

    return res;
};

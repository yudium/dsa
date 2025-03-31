/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function (colors, edges) {
    // 4r (pass)
    // 3b -> 4r (pass)
    // 2r -> 3b -> 4r (pass)

    const color_set = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(97 + i)
    );

    const neighbors = {};
    for (const [src, dst] of edges) {
        if (Array.isArray(neighbors[src])) {
            neighbors[src].push(dst);
        } else {
            neighbors[src] = [dst];
        }
    }

    const count = {};
    for (let node = 0; node < colors.length; node++) {
        count[node] = {};
        for (const color of color_set) {
            count[node][color] = 0;
        }
    }

    const path = {};
    const visit = {};

    function dfs(index) {
        try {
            // circular path found
            if (path[index]) {
                return Infinity;
            }

            path[index] = true;

            // cache: no need to compute again
            if (visit[index]) {
                return 0;
            }

            count[index][colors[index]] = 1;

            if (neighbors[index]) {
                for (const nei of neighbors[index]) {
                    if (dfs(nei) === Infinity) {
                        return Infinity;
                    }

                    for (const color of color_set) {
                        count[index][color] = Math.max(
                            count[index][color],
                            count[nei][color] +
                                (colors[index] === color ? 1 : 0)
                        );
                    }
                }
            }

            return Math.max(...Object.values(count[index]));
        } finally {
            delete path[index];
            visit[index] = true;
        }
    }

    let largest = 0;
    for (let i = 0; i < colors.length; i++) {
        largest = Math.max(largest, dfs(i));

        if (largest === Infinity) {
            return -1;
        }
    }

    return largest;
};

// expected: 3
console.log(
    largestPathValue("abaca", [
        [0, 1],
        [0, 2],
        [2, 3],
        [3, 4],
    ])
);

// expected: 5
console.log(
    largestPathValue("nnllnzznn", [
        [0, 1],
        [1, 2],
        [2, 3],
        [2, 4],
        [3, 5],
        [4, 6],
        [3, 6],
        [5, 6],
        [6, 7],
        [7, 8],
    ])
);

// expected: 1
console.log(largestPathValue("g", []));

// expected: 1
console.log(
    largestPathValue("keitgkggegyktyeytgyigkggktiigigkeyygtgytiygtkg", [
        [0, 1],
        [1, 2],
        [2, 3],
        [1, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [3, 6],
        [5, 7],
        [6, 8],
        [5, 8],
        [7, 8],
        [8, 9],
        [7, 10],
        [8, 10],
        [9, 10],
        [10, 11],
        [9, 11],
        [7, 11],
        [5, 12],
        [11, 12],
        [11, 13],
        [13, 14],
        [12, 14],
        [12, 15],
        [10, 15],
        [14, 15],
        [7, 15],
        [9, 16],
        [13, 16],
        [12, 16],
        [15, 16],
        [11, 17],
        [14, 17],
        [16, 17],
        [15, 18],
        [14, 18],
        [17, 18],
        [18, 19],
        [14, 19],
        [13, 19],
        [14, 20],
        [15, 21],
        [12, 21],
        [20, 21],
        [19, 22],
        [20, 22],
        [21, 22],
        [22, 23],
        [19, 23],
        [11, 23],
        [18, 23],
        [13, 24],
        [23, 24],
        [21, 24],
        [24, 25],
        [13, 25],
        [23, 25],
        [15, 26],
        [23, 26],
        [25, 26],
        [24, 26],
        [26, 27],
        [25, 27],
        [26, 28],
        [27, 28],
        [20, 28],
        [23, 28],
        [11, 28],
        [23, 29],
        [29, 30],
        [25, 31],
        [26, 31],
        [15, 32],
        [30, 32],
        [31, 33],
        [27, 33],
        [30, 33],
        [28, 33],
        [29, 34],
        [32, 35],
        [33, 35],
        [34, 35],
        [35, 36],
        [13, 36],
        [34, 36],
        [30, 37],
        [36, 37],
        [35, 37],
        [24, 37],
        [35, 38],
        [34, 39],
        [37, 39],
        [37, 40],
        [39, 41],
        [37, 41],
        [41, 42],
        [38, 42],
        [40, 43],
        [43, 44],
        [39, 44],
        [35, 44],
        [38, 45],
        [44, 45],
        [26, 45],
    ])
);

exports.algorithm = function (input) {
    let l = 0;
    let r = input.length - 1;

    while (l < input.length && r >= 0) {
        if (input[l] !== input[l].toLowerCase()) {
            l += 1;
        } else if (input[r] !== input[r].toUpperCase()) {
            r -= 1;
        } else if (input[l] === input[r].toLowerCase()) {
            l += 1;
            r -= 1;
        } else {
            return false;
        }
    }

    return true;
};

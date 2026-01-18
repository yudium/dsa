/**
[]

[1]

[1, 1]

[2, 1]
    l
    r

[8, 6, 2, 4]
       l
       r

[3, 1, 0, 2, 4]
       l
       r


Sketch:

    while l < r
    if input[l] > input[r]
        push backward input[l]
        decrease o
        increase l
    else if input[r] > input[l]
        push backward input[r]        <==
        decrease o
        decrease r
    else if input[r] = input[l]
        push backward input[l]
        decrease o
        push backward input[r]
        decrease o
        increase l
        decrease r          // POST MORTEM: I was accidentally write it 'increase r'


    if l = r
    Push input[l] to the output[0]
*/

exports.algorithm = function (input) {
    let l = 0
    let r = input.length - 1

    const output = Array(input.length).fill(null)
    let o = output.length - 1

    while (l < r) {
        if (input[l] > input[r]) {
            output[o] = input[l]
            o -= 1
            l += 1
        } else if (input[r] > input[l]) {
            output[o] = input[r]
            o -= 1
            r -= 1
        } else if (input[l] === input[r]) {
            output[o] = input[l]
            o -= 1
            l += 1
            output[o] = input[r]
            o -= 1
            r -= 1
        }
    }

    if (l === r) {
        output[0] = input[l]
    }


    return output
};

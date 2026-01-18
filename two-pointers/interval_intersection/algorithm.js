/*

Case 1:
1
1
l
r

Case 2:
1
  2
l
  r

Case 3:
0 1 2 3 4 5 6 7 8 9 10
* *     $ $ $ * *
    $ $   * * * * $ $$

                l
                r

Case 4:
1 2 3 4 5 6 7 8 9 10 11
  * * * $ $ $ $
    * $ $ $ $

             l
             r

actions
- if a is less than b, move forward a
- if l = r and one of pointer is in beginning of an interval
    - store the value as start of intersection
    - move forward both of them
- if l = r and the value is in the end of an interval
    - store the value as end of intersection
    - move forward both of them
if if l = r
    - do not store the value
    - move forward both of them
*/

class Intervals {
    constructor(arr) {
        this.arr = arr;
        this.pinterval = 0;
        this.current = this.arr[this.pinterval][0];
    }

    getValue() {
        return this.current;
    }

    isAtStartOfInterval() {
        // POST MORTEM: I made fundamental error comparing index, and not value.
        const start_value = this.arr[this.pinterval][0];

        return this.current === start_value;
    }

    isAtEndOfInterval() {
        // POST MORTEM: I made fundamental error comparing index, and not value.
        const end = this.arr[this.pinterval].length - 1;
        const end_value = this.arr[this.pinterval][end];

        return this.current === end_value;
    }

    moveForward() {
        if (this.isAtEndOfInterval()) {
            this.pinterval += 1;

            // POST MORTEM: It should handle when pinterval cross the limit
            this.current = this.arr[this.pinterval]?.[0] || null;
        } else {
            this.current += 1;
        }
    }
}

exports.algorithm = function (arr1, arr2) {
    const intervals1 = new Intervals(arr1);
    const intervals2 = new Intervals(arr2);

    const intersections = [];
    let p = -1;

    // POST MORTEM: Exit check should handle when value = 0
    while (intervals1.getValue() !== null && intervals2.getValue() !== null) {
        const value1 = intervals1.getValue();
        const value2 = intervals2.getValue();

        if (value1 !== value2) {
            if (value1 < value2) {
                intervals1.moveForward();
            } else {
                intervals2.moveForward();
            }
        } else {
            if (
                intervals1.isAtStartOfInterval() ||
                intervals2.isAtStartOfInterval()
            ) {
                intersections.push([value1]);
                p += 1;
            }

            if (
                intervals1.isAtEndOfInterval() ||
                intervals2.isAtEndOfInterval()
            ) {
                intersections[p].push(value1);
            }

            // POST MORTEM: I made typo by using `value` here
            intervals1.moveForward();
            intervals2.moveForward();
        }
    }

    return intersections;
};

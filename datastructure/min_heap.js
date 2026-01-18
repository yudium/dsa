/**
 * Min heap is just twin of Max Heap where its comparator operator
 * is switched from '>' to '<'
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    /**
     * @param {number|Array} item - if it is an array, the first element must be number. See @method getValue
     */
    push(item) {
        this.heap.push(item); // put as last node
        this.heapifyUp(); // reorganize the heap, ensuring max value become root
    }

    heapifyUp() {
        // set current node to last node
        let index = this.heap.length - 1;

        while (index > 0) {
            const parent_index = Math.floor((index - 1) / 2);

            // compare current to parent node
            if (this.getValue(index) < this.getValue(parent_index)) {
                this.swap(parent_index, index);
                index = parent_index;
            } else {
                break;
            }
        }
    }

    getValue(index) {
        const value = this.heap[index];
        if (Array.isArray(value)) {
            return value[0];
        } else {
            return value;
        }
    }

    swap(index1, index2) {
        const temporary = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temporary;
    }

    pop() {
        if (this.heap.length === 0) {
            return undefined;
        }

        const item = this.heap[0];
        // NOTE: do pop and add put it back as first element will throw Fatal Javascript error
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    heapifyDown() {
        // set current node to root
        let index = 0;

        while (this.getLeftChildIndex(index) < this.heap.length) {
            // compare parent node to its left and right child
            const left_index = this.getLeftChildIndex(index);
            const right_index = this.getRightChildIndex(index);

            let smallest_child_index = left_index;

            if (this.getValue(right_index) < this.getValue(left_index)) {
                smallest_child_index = right_index;
            }

            if (this.getValue(index) < this.getValue(smallest_child_index)) {
                break;
            }

            this.swap(smallest_child_index, index);
            index = smallest_child_index;
        }
    }

    getLeftChildIndex(parent_index) {
        return 2 * parent_index + 1;
    }

    getRightChildIndex(parent_index) {
        return 2 * parent_index + 2;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    getNodesLength() {
        return this.heap.length;
    }

    /**
     * Useful method when used as while condition
     */
    peek() {
        if (this.heap.length === 0) {
            return undefined;
        }

        return this.heap[0];
    }
}

exports.MinHeap = MinHeap;

const min_heap = new MinHeap();
min_heap.push(2);
min_heap.push(1);
min_heap.push(4);
min_heap.push(3);

// console.log("= ", min_heap.heap);
// console.log(min_heap.pop());

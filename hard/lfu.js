/**
 * NOTE:
 *
 * - https://www.youtube.com/watch?v=bLEIHn-DgoA&list=PLQpVsaqBj4RI3jgIzqK7VJHy8Esacg-ow&index=6
 * - Object.keys(this.valMap).length takes a long time, so i replaced it with a counter.
 * - Basically it just a hashmap with a linked list, where the key is frequency and linked list to sort by used time.
 * - Having a unit test helps to add logic without rethinking from beginning, speed up devopment.
 */

class ListNode {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // always have left and right set to dummy node
        this.left = new ListNode(0);
        this.right = new ListNode(0, this.left);
        this.left.next = this.right;
        this.map = {};
        this.mapCount = 0;
    }

    length() {
        return this.mapCount;
    }

    // insert new key as recently used
    pushRight(val) {
        const node = new ListNode(val, this.right.prev, this.right);
        this.map[val] = node;
        this.mapCount++;
        this.right.prev = node;
        node.prev.next = node;
    }

    // remove recently used
    popLeft() {
        const res = this.left.next.val;
        this.pop(this.left.next.val);
        return res;
    }

    // mark as recently used
    update(val) {
        this.pop(val);
        this.pushRight(val);
    }

    // remove val
    pop(val) {
        if (val in this.map) {
            const node = this.map[val];
            const next = node.next;
            const prev = node.prev;
            next.prev = prev;
            prev.next = next;
            delete this.map[val];
            this.mapCount--;
        }
    }
}

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;

        // managing keys
        this.lfuCount = 0;
        this.countMap = {}; // Map key to count
        this.listMap = {}; // Map count ouf key to Linked List

        this.valMap = {}; // Map key to value
        this.valMapCount = 0;
    }

    count(key) {
        const prevCount = this.countMap[key] || 0;
        this.countMap[key] = prevCount + 1;
        this.listMap[prevCount]?.pop(key);
        if (!this.listMap[prevCount + 1]) {
            this.listMap[prevCount + 1] = new LinkedList();
        }
        this.listMap[prevCount + 1].pushRight(key);

        // when lowest counter has moved up
        if (
            prevCount === this.lfuCount &&
            (this.listMap[prevCount]?.length() === 0 ||
                this.listMap[prevCount] === undefined) // new key has prevCount 0, no linked list
        ) {
            this.lfuCount += 1;
        }
    }

    get(key) {
        if (this.valMap[key] === undefined) {
            return -1;
        }

        this.count(key);
        return this.valMap[key];
    }

    put(key, value) {
        if (this.capacity === 0) {
            // oops, system have been configured to store 0 items
            return;
        }

        // it is full, removing both least recently used and frequently used
        if (
            this.valMap[key] === undefined &&
            this.valMapCount === this.capacity
        ) {
            const deleteTarget = this.listMap[this.lfuCount].popLeft();
            delete this.valMap[deleteTarget];
            delete this.countMap[deleteTarget];
            this.valMapCount -= 1;
        }

        if (this.valMap[key] === undefined) {
            this.valMapCount += 1;
        }

        this.valMap[key] = value;
        this.count(key);
        this.lfuCount = Math.min(this.lfuCount, this.countMap[key]);
    }
}

const cache = new LFUCache(3);
cache.put("key", "value");
cache.put("key1", "value1");
console.log(cache.get("key2"));
cache.put("key3", "value3");
console.log(cache.get("key1"));
console.log(cache.get("key"));
cache.put("key4", "value4"); // exceed capacity, will remove a key
console.log(cache.get("key")); // should be -1 since it has been removed

// https://www.youtube.com/watch?v=VroH6J47kIE&list=LL&index=5
// Given a string traversal of a binary tree in a pre-order traversal,
// recover the binary tree and return its root.

function recoverPreorderTraversal(traversal) {
  let dashes = 0;
  const stack = [];
  let i = 0;

  while (i < traversal.length) {
    if (traversal[i] === "-") {
      // count dashes (aka depth of node)
      dashes += 1;
      i += 1;
    } else {
      // loop until last digit before encountering dash or end of string
      let j = i;
      while (j < traversal.length && traversal[j] != "-") {
        j += 1;
      }

      const val = traversal.slice(i, j);

      const node = {
        left: null,
        right: null,
        val: val,
      };

      while (stack.length > dashes) {
        stack.pop();
      }

      if (stack.length > 0 && !stack.at(-1).left) {
        stack.at(-1).left = node;
      } else if (stack.length > 0 && stack.at(-1).left) {
        stack.at(-1).right = node;
      }

      stack.push(node);
      i = j;
      dashes = 0;
    }
  }

  return stack[0];
}

const result = recoverPreorderTraversal("1-2--3--4-5--6--7");

console.log(result);

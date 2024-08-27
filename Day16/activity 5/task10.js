// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function calculateDepth(node) {
    if (node === null) {
        return 0; 
    }
    
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

const root1 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

const root2 = new TreeNode(10,
    new TreeNode(5,
        new TreeNode(2),
        new TreeNode(7)
    ),
    new TreeNode(15,
        null,
        new TreeNode(20)
    )
);

console.log("Depth of root1:", calculateDepth(root1)); 
console.log("Depth of root2:", calculateDepth(root2));

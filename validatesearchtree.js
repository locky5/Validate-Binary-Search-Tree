var isValidBST = function(root) {
    let result = true
    let previousNode = null

    if (!root) {
        return true
    }

    function recursive(node) {
        if (node.left) {
            recursive(node.left)
        }

        if (previousNode !== null && previousNode >= node.val) {
            result = false
            return
        }
        previousNode = node.val

        if (node.right) {
            recursive(node.right)
        }
    }

    recursive(root)

    return result
};

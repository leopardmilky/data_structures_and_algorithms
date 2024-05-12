/*
깊이우선탐색-전위순회(DFS pre-order)
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(value) {     // 노드 추가
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;                            // current변수는 비교 노드 (처음에는 시작노드(root))
        while(true) {
            if(value === current.value) return undefined;
            if(value < current.value) {                     // 입력한 value가 current의 value보다 작은 경우.
                if(current.left === null) {                     // current의 left가 null일때
                    current.left = newNode;                     // 새노드를 추가.
                    return this;
                }
                current = current.left;                         // current의 left가 null이 아닐때, current변수에 갱신.
            } else {                                            // 입력한 value가 current의 value보다 큰 경우.
                if(current.right === null) {                    // current의 right가 null일때
                    current.right = newNode;                    // 새노드를 추가.
                    return this;
                }
                current = current.right;                        // current의 right가 null이 아닐때, current변수에 갱신.
            }
        }
    }

    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}
/*
=> [10, 3, 15, 1, 8, 20, 6]
                10
        3               15
    1       8               20
          6
=> [10, 3, 1, 8, 6, 15, 20]
*/
/*
너비우선탐색(breadth-first search, BFS)


*BFS vs DFS
- BFS는 트리구조가 아주 넒다면 큐를 저장하는데 많은 자원을 소비해야함.
- DFS는 트리구조가 깊다면 많은 자원을 사용함.
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

    BFS() {
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);

        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}
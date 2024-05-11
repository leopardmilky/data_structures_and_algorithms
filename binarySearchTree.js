/*
이진탐색트리(binary search tree) :
이진트리의 한 종류. 
모든 부모 노드는 최대 2개의 자식을 갖음.
부모 노드의 왼쪽에 있는 모든 노드는 언제나 부모보다 작음.
부모 노드의 오른쪽에 있는 모든 노드는 언제나 부모보다 큼.
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

    find(value) {       // 노드 찾기(값 반환)
        if(this.root === null) return false;                // root노드가 null이면 아무것도 없는거.
        let current = this.root,                            // current, found변수 생성. current변수는 비교노드를 가지고 있음.
            found = false;                                  // found는 원하는 값을 찾는 용도.    
        while(current && !found) {
            if(value < current.value) {                     // 입력한 value가 current의 value보다 작은 경우.
                current = current.left;                         // current.left를 current변수에 갱신.
            } else if(value > current.value) {              // 입력한 value가 current의 value보다 큰 경우.
                current = current.right;                        // current.right를 current변수에 갱신.
            } else {                                        // 입력한 value가 current의 value와 같은 경우. (찾고자 하는 값)
                found = true;                                   // found를 true로 갱신.
            }
        }
        if(!found) return undefined;                        // 트리를 모두 순회하고도 찾지 못한 경우. undefined
        return current;                                     // 결과 노드 출력
    }

    contains(value) {   // 노드 찾기(true, false반환)
        if(this.root === null) return false;
        let current = this.root, 
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}
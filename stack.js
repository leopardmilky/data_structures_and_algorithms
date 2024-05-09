/*
Stack: 후입선출 방식. (first가 선출됨)
*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;      // 가장 위에 있던 노드(first)를 임시변수에 담음.
            this.first = newNode;       // 새노드를 first에 저장.
            this.first.next = temp;     // first.next에 임시변수 값을 저장.
        }
        return ++this.size;
    }

    pop() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
            // first와 last가 같다면 노드가 1개만 있는 경우임. first와 last의 next는 null일 것임.
            // first는 아랫줄에서 null로 변경될 것임.
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
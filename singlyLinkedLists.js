class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) { // 끝에 노드를 추가
        let newNode = new Node(val);
        if(!this.head) {    // 노드가 없을때(첫추가)
            this.head = newNode;
            this.tail = this.head;
        } else {    // 노드가 있을때
            this.tail.next = newNode;   // tail의 다음 노드가 뭔지 저장.
            this.tail = newNode;        // tail이 무슨 노드인지 저장. (끝에 노드를 추가 하는 것이기 때문에 tail과 tail.next가 같은 노드임)
        }
        this.length++;
        return this;
    }
    pop() { // 끝에 노드를 제거
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {   // 맨 앞 노드를 제거
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {  // 맨 앞에 노드를 추가
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {    // 해당 위치의 노드의 값을 가져옴.
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) {     //  해당 위치의 노드의 값을 변경.
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {    // 해당 위치에 노드 추가
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);  // !! -> 불리언 형식으로 결과를 받기위해 사용. length와 index가 같으면 맨 끝 노드이므로 push로 추가.
        if(index === 0) return !!this.unshift(val);         // index가 0이면 맨 앞 노드이므로 unshift로 추가.

        let newNode = new Node(val);        // 추가 하려는 노드 생성.
        let prev = this.get(index - 1);     // 추가 하려는 위치 바로 전 노드 검색 (next를 변경해야함)
        let temp = prev.next;               // 추가 하려는 위치에 있는 노드를 임시변수에 저장(노드를 추가한 후 다음 노드가 되어야함.)
        prev.next = newNode;                // 추가 하려는 위치 바로 전 노드의 next에 추가.
        newNode.next = temp;                // 임시변수를 추가된 노드 next에 추가.
        this.length++;
        return true;
    }
    remove(index) { // 해당 위치의 노드 제거
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();                // index가 0이면 맨 앞이므로 shift로 노드 제거.
        if(index === this.length - 1) return this.pop();    // index가 length-1과 같으면 맨 뒤이므로 pop으로 제거.

        let previousNode = this.get(index - 1);             // 제거하려는 바로 전 노드 찾기.
        let removed = previousNode.next;                    // 바로 전 노드의 next(제거하려는 노드)를 변수에 저장
        previousNode.next = removed.next;                   // 제거 하려는 노드의 바로 전 노드next에 제거한 다음 노드next를 연결.
        this.length--;
        return removed;
    }
    reverse() { // 역순으로 변경
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

// let list = new SinglyLinkedList();
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority) {     // 노드 추가
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;                   // 시작은 마지막 인덱스(비교 인덱스)
        const element = this.values[idx];                   // 마지막 노드 (비교 노드)
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);        // 부모 노드 인덱스
            let parent = this.values[parentIdx];            // 부모 노드
            if(element.priority >= parent.priority) break;  // 비교노드의 우선순위가 부모 노드의 우선순위 보다 높거나 같으면 종료. (낮은 숫자가 높은 우선순위)
            this.values[parentIdx] = element;               // 그렇지 않으면 부모노드를 비교노드로 수정
            this.values[idx] = parent;                      // 비교노드를 부모노드로 수정
            idx = parentIdx;                                // 비교 인덱스를 부모 인덱스로 수정 그리고 반복
        }
    }
    dequeue() {     // 노드 제거(가장 우선 순위의 노드)
        const min = this.values[0];     // 가장 앞의 노드(루트)
        const end = this.values.pop();  // 마지막 노드
        if(this.values.length > 0) {
            this.values[0] = end;       // 마지막 노드를 루트에 위치시키고
            this.sinkDown();            // 정렬진행
        }
        return min;
    }
    sinkDown() {
        let idx = 0;    // 루트노드
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
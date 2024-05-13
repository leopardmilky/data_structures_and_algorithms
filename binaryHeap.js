/*
이진 힙(Binary Heap):
힙은 트리 구조의 일종.
최대 2개의 자식을 가짐.
최대이진힙(Max Binary Heap)은 부모노드가 항상 자식노드 보다 큰 값을 가짐.
최소이진힙(Min Binary Heap)은 부모노드가 항상 자식노드 보다 작은 값을 가짐.
이진탐색트리(Binary Search Tree)와 다르게 왼쪽과 오른쪽에 순서가 없음. (그냥 왼쪽먼저 채움)
*/

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
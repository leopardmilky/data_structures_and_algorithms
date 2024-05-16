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
        let idx = this.values.length - 1;               // 마지막 인덱스(idx).
        const element = this.values[idx];               // 마지막 인덱스 값(비교element).
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);    // 해당 idx의 부모 인덱스(parentIdx).
            let parent = this.values[parentIdx];        // 해당 idx의 부모 인덱스 값(parent).
            if(element <= parent) break;                // 해당 idx의 값이 부모idx 값보다 작으면 올바른 위치이므로 종료.
            this.values[parentIdx] = element;           // 그렇지 않으면 element를 parentIdx위치에 삽입.
            this.values[idx] = parent;                  // parent는 idx위치에 삽입.
            idx = parentIdx;                            // 그리고 idx를 parentIdx로 갱신하고 루프를 돔.
        }
    }

    extractMax() {  // root를 제거하고 재정렬.
        const max = this.values[0];                     // root값.
        const end = this.values.pop();                  // 맨 마지막 값.
        this.values[0] = end;                           // 마지막 값을 root에 위치 시키고 재정렬(sinkDown함수 실행).
        this.sinkDown();
        return max;
    }

    sinkDown() {
        let idx = 0;                                    // 인덱스 0부터 시작.
        const length = this.values.length;
        const element = this.values[0];                 // 인덱스 0 값(비교element).
        while(true) {
            let leftChildIdx = 2 * idx + 1;             // 해당 idx의 왼쪽 자식노드 인덱스.
            let rightChildIdx = 2 * idx + 2;            // 해당 idx의 오른쪽 자식노드 인덱스.
            let leftChild, rightChild;                  // 자식노드 값을 담을 변수.
            let swap = null;                            // 스왑할 인덱스를 담을 변수.

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];  // 왼쪽 자식노드 값 할당.
                if(leftChild > element) {               // 왼쪽 자식노드가 element보다 크면,
                    swap = leftChildIdx;                // swap 변수에 leftChildIdx 할당.
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];        // 오른쪽 자식노드 값 할당.
                if(
                    (swap === null && rightChild > element) ||  // swap이 null이면서 오른쪽 자식노드 값이 element보다 크거나,
                    (swap !== null && rightChild > leftChild)   // 혹은 swap이 null이 아니면서 오른쪽 자식노드 값이 왼쪽보다 클때,
                ) {
                    swap = rightChildIdx;                       // swap 변수에 rightChildIdx 할당.
                }
            }

            if(swap === null) break;                            // swap이 여전히 null이면 종료.
            this.values[idx] = this.values[swap];               // swap인덱스를 idx위치에 할당.
            this.values[swap] = element;                        // 비교element를 swap인덱스 위치에 할당.
            idx = swap;                                         // idx가 swap인덱스로 갱신. 그리고 반복...
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
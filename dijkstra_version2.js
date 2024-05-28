class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

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
            this.values[parentIdx] = element;               // 그렇지 않으면 부모노드를 비교노드로 수정 (부모노드와 비교노드 자리바꿈)
            this.values[idx] = parent;                      // 비교노드를 부모노드로 수정
            idx = parentIdx;                                // 비교 인덱스를 부모 인덱스로 수정(부모 인덱스가 새로운 비교 인덱스가 되는거) 그리고 반복
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
    sinkDown() {    // 최우선 순위인 루트 노드를 제거 후, 마지막 노드가 루트 자리에 올라왔을 때, 이 새로운 루트노드를 적절한 위치로 이동 시키는 것.
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

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []
        let smallest;
        // 초기상태 작업
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        
        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest === finish) {       // 선택된 노드가 finish라면 루프 종료. 경로를 구축하기 위해 previous를 추적하며 경로를 path에 저장.
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity) {              // 선택된 노드가 유효한 노드인지 확인(Infinity이면 안되기 때문)
                for(let neighbor in this.adjacencyList[smallest]) {         // 선택된 노드의 인접 노드를 탐색
                    let nextNode = this.adjacencyList[smallest][neighbor];  // 인접 노드의 정보를 가져옴(val, priority)
                    let candidate = distances[smallest] + nextNode.weight;  // 현재 노드를 통해 인접 노드로 가는 새로운 거리를 계산.(현재 노드까지의 거리 + 인접 노드까지 거리)
                    let nextNeighbor = nextNode.node;                       // 인접 노드의 이름(val)
                    if(candidate < distances[nextNeighbor]) {               // 새로운 거리가 기존 거리보다 짧으면 갱신함.
                        distances[nextNeighbor] = candidate;                // 거리 갱신.
                        previous[nextNeighbor] = smallest;                  // 이전 노드 기록.
                        nodes.enqueue(nextNeighbor, candidate);             // 인접 노드를 큐에 추가.
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]
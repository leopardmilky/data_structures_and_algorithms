class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) { // 노드 생성
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1,v2) {    // 노드간 연결 생성
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1,vertex2) {   // 노드 연결 제거
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {  // 노드 제거
        while(this.adjacencyList[vertex].length) {  // 해당 노드와 연결되어 있는 노드들(배열)과 각각의 연결되어 있는 노드들에서 해당 노드 연결 제거.
            // const adjacentVertex = this.adjacencyList[vertex].pop();
            // this.removeEdge(vertex, adjacentVertex);
            this.removeEdge(vertex, this.adjacencyList[vertex].pop());
        }
        delete this.adjacencyList[vertex];  // 마지막으로 해당 노드 제거.
    }

    depthFirstRecursive(start) {    // 깊이우선그래프(DFS)-재귀적용법
        const result = [];
        const visited = {};

        // 방법1
        /*
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start);
        */

        // 방법2
        const dfs = (vertex) => {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        }
        dfs(start)

        return result;
    }

    depthFirstIterative(start) {    // 깊이우선그래프(DFS)-반복적용법
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]) {
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }

    breadthFirst(start) {       // 넓이우선그래프(BFS)
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
           

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}


let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
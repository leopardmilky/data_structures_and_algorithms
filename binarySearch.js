/* binary search
: 정렬된 리스트에서 검색 범위를 줄여가며 원하는 값을 찾는 알고리즘.
- binary search를 사용하려면 정렬이 먼저 되어 있어야함.
- 검색이 반복될 때마다 검색 범위가 절반씩 줄어들어 속도가 빠르다.
*/
/* 
바이너리 서치(이진 탐색)

1. 찾으려는 리스트에서 시작점, 끝점, 중간점을 설정.
2. 중간점 값이 찾으려는 값과 일치하지 않고 + 시작점이 끝점 보다 위치가 먼저이거나 같으면 계속 진행.
3. 중간점의 값이 찾으려는 값보다 크면, 끝점의 위치를 '중간점-1'로 설정.
4. 중간점의 값이 찾으려는 값보다 작으면, 시작점의 위치를 '중간점+1'로 설정.
5. 중간점은 검색이 한 번 반복될 때마다 재설정.
*/ 


function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while(arr[middle] !== num && start <= end) {
        if(num < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === num ? middle : -1;
}
binarySearch([2,4,5,6,7,9,13,17,22,28,33,45,48,52,55,65,67,79,88,90,93,96,99,101,105,110,113], 96);
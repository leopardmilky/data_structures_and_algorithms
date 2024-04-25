/*
퀵 정렬(quick sort)
- 퀵 정렬도 합병 정렬과 같은 분할-정복의 알고리즘인데, 다른점은 퀵 정렬은 비균등분할이다.
- 문제를 작은 2개의 문제로 분리하고 각각 해결한 다음, 결과를 모아서 원래의 문제를 해결하는 방식.

-> 리스트 안에 있는 한 요소를 선택한다. 이렇게 고른 원소를 *피벗이라 한다.
-> 피벗을 기준으로 피벗보다 작은 요소들을 왼쪽으로 옮기고 큰 요소들은 오른쪽으로 옮긴다. (그럼 피벗은 정렬된 위치에 있게됨)
-> 피벗을 제외한 왼쪽 리스트와 오른쪽 리스트를 각각 처음과 같이 반복하여 리스트를 더 이상 분할하지 못할때까지 정렬을 진행한다.
*/


function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (array, i, j) => ([array[i], array[j]] = [array[j], array[i]]);

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
/*
퀵 정렬(quick sort)
- 첫번째 인자에서 자신보다 작은 수를 전부 찾은 후, 왼쪽으로 옮기고 자신은 찾은 수 자리에 들어간다. 
=> 그럼 자신의 왼쪽은 정렬은 안되어 있지만 전부작은 숫자.
=> 자신은 정렬이 완성됨.
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
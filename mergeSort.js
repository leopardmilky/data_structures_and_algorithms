/*
합병 정렬(merge sort)
: 분할 정복(divide and conquer) 방식의 정렬 기법.
- 리스트를 2개로 분할 하는데, 분할 할 수 없는 하나의 원소만 포함하는 부분 리스트가 될 때가지 쪼갠다.
- 2개씩 나누어진 부분 리스트들을 정렬하고 결합하는 과정을 반복하여 하나로 만든다. 
*/

function merge(arr1, arr2) {    // 분할한 부분 리스트 원소끼리 비교하여 올바르게 정렬.
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) { // 두 개의 부분 리스트의 각 원소끼리 비교
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {    // 나머지 원소들 삽입
        results.push(arr1[i]);
        i++;
    }
    
    while(j < arr2.length) {    // 나머지 원소들 삽입
        results.push(arr2[j]);
        j++;
    }

    return results
}

function mergeSort(arr) {   // 리스트 분할 함수.
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));    // arr의 0번째 부터 mid전까지 반복 분할.
    let right = mergeSort(arr.slice(mid));      // arr의 mid부터 끝까지 반복 분할.

    return merge(left, right);
}

// mergeSort([3,5,12,34,35,31,2,21,19]);
// mergeSort([31,2,21,19]);
/*
선택 정렬(selection sort) 
: 선택 정렬은 정렬되지 않은 데이터들에 대해 가장 작은 데이터를 찾아 가장 앞의 데이터와 교환해나가는 방식.

- 주어진 리스트에서 최솟값을 찾는다.
- 그 값을 맨 앞에 위치한 값과 바꾼다.
- 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.
- 원소가 하나만 남을 때까지 반복한다.
*/

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for(let i = 0; i < arr.length; i++) {   // 첫번째 원소를 가장 작은 원소라고 가정하고 순회.(순회가 끝나면 그 다음 원소 진행)
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++) {   // 그 다음 원소와 비교하면서 가장 작은 원소를 갱신.
            if(arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if(i !== lowest) swap(arr, i, lowest);  // 리스트 끝까지 순회하면 lowest에 가장 작은 원소만 남음. 위치 스왑을 진행.
    }
    return arr;
}

selectionSort([22,3,5,14,56,88]);
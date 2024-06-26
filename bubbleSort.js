/*
버블 정렬
: 인접한 2개의 원소를 비교하여 크기가 순서에 맞지 않으면 교환함.
- 첫번째와 두번째, 두번째와 세번째, 세번째와 네번째... 이와 같은 방식으로 비교해가며 교환하여 정렬.
- 1회차를 수행하면 가장 큰 숫자가 맨 뒤로 이동하게 됨.
- 2회차는 맨 마지막 원소를 제외하고 진행, 3회차는 맨 마지막 두번째까지 제외하고 진행... 반복....
*/


function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {   // 리스트를 한 바퀴 순회. (리스트 크기 만큼 반복해야 함)
        for(let j = 0; j < i - 1; j++) {    // 리스트 첫번째 원소부터 시작. (리스트 크기-1 만큼 반복)
            if(arr[j] > arr[j+1]) {         // 인접한 두개 비교. 앞에 원소가 뒤의 원소보다 크면 교환.
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

function bubbleSort2(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

bubbleSort([2,4,12,7,1,0]);
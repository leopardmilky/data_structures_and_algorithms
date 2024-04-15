/*
삽입 정렬
: 자신의 앞의 원소들과 비교해가며 자신의 위치를 찾아감.
- 시작은 두번째 원소부터 시작함.
- 자신의 앞의 원소들과 하나씩 비교하며 진행. 두번째는 첫번째와 비교, 세번째는 두번째, 첫번째와 비교 .... 이런식
- 자신의 위치를 찾으면 그 위치에 원소를 넣기 위해 원소를 한칸씩 이동시킴.
*/


function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([4,2,7,34,1,8,0])

function insertionSort2(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for(let j = i - 1; j >= 0; j--) {
            if(arr[j] > currentVal){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

insertionSort2([4,2,7,34,1,8,0])


function optimizedInsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

// optimizedInsertionSort([4,2,7,34,1,8,0])
// function insertionSort(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         let currentVal = arr[i];
//         for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j];
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([4,2,7,34,1,8,0])

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
function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([2,4,12,7,1,0])
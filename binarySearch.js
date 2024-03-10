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
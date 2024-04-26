/*
기수 정렬(radix sort)
: 자릿수를 기준으로 정렬하는 알고리즘으로 값들 간의 비교를 통해 정렬하는 것과는 다른 방식.

- 시간 복잡도가 O(n)이지만 메모리를 그만큼 많이 사용해야함.
*/

function getDigit(num, i) { // 자릿수 숫자 알아내기. (234,0 -> 4 | 234,1 -> 3)
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {  // 자릿수 알아내기. (234 -> 3 | 2345 -> 4)
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) { // 배열에서 가장 높은 자릿수 알아내기. ([32,2,4,65,44,5454,333] -> 4)
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);   // 1. 가장 높은 자릿수를 찾는다.
    for(let k = 0; k < maxDigitCount; k++) {    // 2. 가장 높은 자릿수 만큼 반복해야함.
        let digitBuckets = Array.from({length: 10}, () => []);  // 3. 각 자릿수에 사용할 0~9까지의 버킷을 만든다.(배열 안에 배열10개)
        for(let i = 0; i < nums.length; i++) {  // 4. 배열 길이 만큼 반복.
            let digit = getDigit(nums[i], k);   // 5. 배열의 각 원소들의 자릿수 숫자를 구한다.
            digitBuckets[digit].push(nums[i]);  // 6. 각 자리수에 맞는 배열에 원소 삽입.(ex. 일의 자리 숫자가 2이면, digitBuckets[2])
        }
        nums = [].concat(...digitBuckets);  // 7. 각 배열들을 합친다. 그리고 반복...
    }
    return nums;
}

radixSort([32,2,4,65,44,5454,333]);
// 함수4. 최솟값 구하기

const minArray = [1, 10, 100, 1000, 10000, 100000]

const min = function(array) {
    let output = array [0]
    for (const item of array) {
        if (output > item) {
            output = item
        }
    }
    return output
}

// console.log(`최솟값 = ${min(minArray)}`)

module.exports = {
    minArray,
    min
}

// 모듈5. 변수 만들어서 모듈 내보내기
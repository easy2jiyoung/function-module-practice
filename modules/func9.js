// 함수9. 배열 합치기

const fruitArray3 = ["apple", "orange", "banana", ];
const fruitArray4 = ["pear", "melon", "peach", "cherry"];

const newFruitArray = function (array1, array2) {
    return array1 + array2
}

// console.log(newFruitArray(fruitArray3, fruitArray4))

module.exports = {
    fruitArray3,
    fruitArray4,
    newFruitArray
}

// 모듈10. 변수 만들어서 모듈 내보내기
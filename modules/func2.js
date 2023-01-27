// 함수2. A * B , 구구단


const easy = function (a, b) {
    return a * b
}

const gugu = function (a) {
    // const result = []
    for(let i = 1; i <= 9; i++) {
        console.log(a*i)
    }
}

console.log(easy(1,2))
gugu(4)

module.exports = {
    easy,
    gugu,
}

// 모듈3. 함수 2개를 변수 선언 하여 모듈로 빼기
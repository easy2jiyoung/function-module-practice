// 함수3. 윤년구하기
/*
function leapYear(year) {
    const a = year % 4 === 0
    const b = year % 100 !== 0
    const c = year % 400 === 0
    return a && b || c
}
*/
const leapYear = function (year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

// console.log(leapYear(2058))

module.exports = leapYear

// 모듈4. 변수 만들어서 모듈 내보내기
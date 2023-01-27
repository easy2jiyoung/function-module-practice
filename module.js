// array.js

const {fruitArray1} = require('./modules/array')
const {fruitArray2} = require('./modules/array')

console.log(fruitArray1, fruitArray2)

//-------------------------------------------------------------------

// func1.js

const sum = require('./modules/func1')

console.log(sum(1,2))

//-------------------------------------------------------------------

// func2.js

const {easy} = require('./modules/func2')
const {gugu} = require('./modules/func2')

console.log(easy(1,5))
gugu(5)

//-------------------------------------------------------------------

// func3.js

const leapYear = require('./modules/func3')

console.log(leapYear(3045))

//-------------------------------------------------------------------

// func4.js

const {minArray} = require('./modules/func4')
const {min} = require('./modules/func4')

console.log(`최솟값 = ${min(minArray)}`)

//-------------------------------------------------------------------

// func5.js

const mulPl = require('./modules/func5')

console.log(mulPl(1, 2, 99))

//-------------------------------------------------------------------

// func6.js

const division = require('./modules/func6')

console.log(division(1, 2))

//-------------------------------------------------------------------

// func7.js

const remainder = require('./modules/func7')

console.log(remainder(4, 188))

//-------------------------------------------------------------------

// func8.js

const many = require('./modules/func8')

console.log(many(4, 100, 83, 79))

//-------------------------------------------------------------------

// func10.js

const {fruitArray3} = require('./modules/func9')
const {fruitArray4} = require('./modules/func9')
const {newFruitArray} = require('./modules/func9')

console.log(newFruitArray(fruitArray3, fruitArray4))

//-------------------------------------------------------------------

// func10.js

const {scores} = require('./modules/func10')
const {good} = require('./modules/func10')

console.log(good)
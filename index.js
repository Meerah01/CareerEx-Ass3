// Hi, Welcome to my first JavaScript code. The naming convention used throughout this file is CAMEL CASE. enjoyyy!!!

// Question 1
const myName = "AWOYEMI Ameerah Aderonke"   // string data type
const age = 19  // numbers
const nationality = "Nigerian" 
const myself = ` My name is ${myName}, I am ${age} years old and I am a ${nationality}. Nice to meet you.` // The backstrokes (``) is used for concatenation/joining of different variables.
console.log( myself )


// Question 2
const favoriteQuote = "Whatever will be, will be - Que sera, sera!"
console.log( favoriteQuote.toLocaleUpperCase() )    // toLocaleUpperCase() : converts the string to upper case.
console.log( favoriteQuote.toLocaleLowerCase() )    // toLocaleLowerCase() : converts the string to lower case.


// Question 3
let word = "I am Capable"
let reversedWord = word.split( '' ).reverse().join('')
console.log( reversedWord )


// Question 4
const price1 = 300
const price2 = 400
const price3 = 700
const priceTotal = price1 + price2 + price3
const message = `The sum of prices 1,2,3 is ${priceTotal}.`
console.log(message)


// Question 5
const score1 = 20
const score2 = 15
const score3 = 17
const score4 = 12
const score5 = 16
const scoreAverage = (score1 + score2 + score3 + score4 + score5) / 5
const testScores = `The average of 5 test scores is ${scoreAverage}.`
console.log(testScores)


// Question 6
const favoriteFoods = ["chicken and chips", "Jollof-rice", "Amala and abula", "Chin-chin", "Stir-fry spaghetti"]
console.log( favoriteFoods[0] )  // displaying the first item in the above array.
console.log( favoriteFoods[4] )  // displaying the last item in the above array.

// Question 7
favoriteFoods.unshift("Bread")   // adds "bread" to the beginning of the array.
favoriteFoods.push("Biscuits and tea")  // adds "biscuits and tea" to the end of the array.
console.log( favoriteFoods )


// Questions 8, 9, 10
const jssOne = [ "David", "Femi", "Joke","Aisha", "Derin", "Todimu", "Lara", "Ande", "Samuel", "Israel" ]
const jssTwo = [ "Kitan", "Princess", "Moses", "Daniel", "Mary", "Paul", "Saul", "Joseph", "Abraham", "Shedrach" ]
const jssThree = [ "Ismael", "Hakim", "Mohammed", "Jibril", "Bayo", "Rahman", "Endurance", "Khalid", "Nabeelah", "Favour" ]
console.log(jssOne)
console.log(jssTwo)
console.log(jssThree)
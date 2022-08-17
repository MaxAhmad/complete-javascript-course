'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements){
  containerMovements.innerHTML = ''
  movements.forEach(function(move, i){
    const type = move > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${move}</div>
      </div>`

      containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

displayMovements(account1.movements)

const displayMovementsBalance = function(movements){
  const balance = movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.innerHTML = `${balance} USD`
}

displayMovementsBalance(account1.movements)


const calcDisplaySummary = function(movements){
  const income = movements.filter(mov => mov > 0)
                          .reduce((acc, mov) => acc + mov, 0)
        labelSumIn.textContent = `${income}USD`

  const outcome = movements.filter(mov => mov < 0)
                           .reduce((acc, mov) => acc + mov, 0)
                  labelSumOut.textContent = `${Math.abs(outcome)}USD`

  const interest = movements.filter(mov => mov > 0)
                            .map(deposits => deposits  * 1.2/100)
                            // computes interest that are only higher than one, and skip interest lower than one
                            .filter(mov => mov >= 1)
                            .reduce((acc, int) => acc + int)
                   labelSumInterest.textContent = `${interest}USD`
}

calcDisplaySummary(account1.movements)


const createUsername = function(accs){
  accs.forEach(function(acc){
    acc.username = 
    acc.owner.toLowerCase().split(' ').map(name => name[0]).join('')
  })
}

createUsername(accounts)
console.log(accounts)
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////



// array SLICE method changes or extract any part of an array without changing or mutating the array. it uses an index

let arr = ['a', 'b', 'c', 'd', 'e']

console.log(arr.slice(2)) //return ['c', 'd', 'e']
// you can also specify the end paramater

console.log(arr.slice(2, 4)) // return ['c', 'd']
// the slice method can also take a negative value. the neagtive value starts counting from the end, -1 is the last, -2 thesecond from last

arr.slice() // return the whole array. you can use the spread operator to achieve this like [...arr]

//Array SPLICE method: this methods works like the slice method but the difference is that it changes or mutate the original array

arr.splice(2) // return ['c', 'd', 'e'] but the original array arr will be ['a', 'b']

// the splice method can also take two parameters the first parameter specifies the index while the 
// last parameter specifies the number of element to be removed or deleted;eample;

arr.splice(1, 2) // return ['a', 'd', 'e']

// REVERSE method: returns reverse the whole array from the last to the first. this method mutates or changes the original array.
//Example

let arr2 = ['i', 'j', 'k', 'l', 'm', 'n']
arr2.reverse() // returns ['n', 'm', 'l', 'k' 'j', 'i']

// CONCAT method returns two array in one array
// example

const letters = arr.concat(arr2)// returns ['n', 'm', 'l', 'k' 'j', 'i', 'a', 'b', 'c', 'd', 'e'] 
// this can also be achieve with the spread operator like [...arr, ...arr2]

//JOIN method joins an array with a specified operator
//Example

letters.join('-') // returns a - b - c - d - e - f -  


// array AT method: this method gets a value of an array specified with an index
// example

const arr3 = [23, 11, 64]
arr[0] //returns 23
arr.at(0) // returns 23

// A significant use case for this method is when you want to get the last element of the array
// example
arr3[arr3.length - 1] // returns 64
arr3.slice(-1)[0] // returns 64
arr3.at(-1)  // returns 64

console.log(arr3[-1]) // this does not exist. it will return an undefined statement

// the AT method also works on a string


//FOREACH LOOP METHOD


//for (const movement of movements){  //iteration using the for loop method
// for(const [i, movement] of movements.entries()){
//   if (movement > 0){
//     console.log(`Movement ${i + 1}: You deposited ${movement}`)
//   }else{
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
//   }
// }

// iteration using the ForEach Method
// the forEach method uses a callback method at each iteration to execute a code block
// it takes the the iteration as a parameter
// example
// console.log('-----FOREACH-----')

// movements.forEach(function(movement, i, ar){
//   if (movement > 0){
//     console.log(`Movement ${i + 1}: You deposited ${movement}`)
//   }else{
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
//   }
// })

// what happens with the foreach method is that
// at iteration 0: the callback function(200)
// at iteration 1: the callback function(450)
// at iteration 2: the callback function(400)
// at iteration 3: the callback function(3000)
// ........
 

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, 
and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, 
and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const dogsJulia = [3, 5, 2, 12, 7]
const dogsKate = [4, 1, 15, 8, 3]

const julia = [3, 5, 2, 12, 7]
const kate = [4, 1, 15, 8, 3]

// const dogsJuliaCorrected = dogsJulia.slice(1, 3)
// //console.log(dogsJulia.slice(1, 3))
// //console.log(dogsJuliaCorrected)

// const dogsAges = dogsJuliaCorrected.concat(dogsKate)

// dogsAges.forEach(function(ages, i){
//   ages > 3 ? console.log(`Dog ${i + 1} is an adult, and is ${ages} years old`) : console.log( `Dog ${i + 1} is still a puppy 🐶`)
// })

function dog(kate, julia){
  const dogsJuliaCorrected = julia.slice(1, 3)
  const dogsAges = dogsJuliaCorrected.concat(kate)

  dogsAges.forEach(function(ages, i){
    ages > 3 ? console.log(`Dog ${i + 1} is an adult, and is ${ages} years old`) : console.log( `Dog ${i + 1} is still a puppy 🐶`)
  })
}

dog(kate, julia)

// Array MAP Method
// this return a new array from an operation of the original array
// the map method always return a value
// example

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// calculate and return a new array of converting the movement array to USD

const eurToUsd = 1.1

// const moveUSD = movements.map(function(move){
//   return move * eurToUsd
// })

// converting it to arrow function
const moveUSD = movements.map(move => move * eurToUsd)

console.log(movements)
console.log(moveUSD)

//using the FOR OF Loop

const moveUSDFor = []
for(const mov of movements){
  moveUSDFor.push(mov * eurToUsd)
}
console.log(moveUSDFor)

const moveDes = movements.map((mov, i) => 
  `movement ${i = 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
  // if (mov > 0){
  //        return (`Movement ${i + 1}: You deposited ${mov}`)
  //      }else{
  //        return (`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
  //      }
)

console.log(moveDes)

// FILTER Array method returns a new array after a condition is met, it filters and return condition from the initial array
// Example; lets filter the deposits from the withdrawal in the movements array and vice versa

const deposits = movements.filter(deposit => deposit > 0)
console.log(deposits)

const withdrawals = movements.filter(withdrawal => withdrawal < 0)
console.log(withdrawals)

// writing the filter method with a FOR OF LOOP

const deposits2 = []
for(const move of movements) if (move > 0) deposits2.push(move)
console.log(deposits2)

/*
 REDUCE Array method is use to narrow down all the elements of an array into one single value
 Eg; adding up all numbers in an array to a single number
 The REDUCE method takes acallback function like the rest of the forEach and map method, the differrence here is that
 the first parameter of the REDUCE method takes an accumulator parameter that adds or take up all the individual elemets in the initial array
 Lets add up all the numbers of the movements array
*/
const balance = movements.reduce((acc, mov, i, arr) => acc + mov , 0)
console.log(balance)

// writing the REDUCE method using the FOR OF LOOP method

let balance2 = 0
for(const mov of movements) balance2 += mov
console.log(balance2)
/*
 we can also return maybe the higest number or lowest number, i.e reduce an array to only the higest or lowest number using 
 the reduce method
 The reduce method is not only applicable to numbers only, it can attribute to strings also
 For example; lets reduce the movements array to only return the highest movements
*/
const maxMovements = movements.reduce((acc, mov) => {
  if (acc > mov) return acc
  else return mov
}, movements[0])

console.log(maxMovements)


///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
   If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function(ages){
  const humanAges = ages.map((age) => {
    if (age <= 2){
      return 2 * age
    }else{
      return 16 + age * 4
    }
  })

  // const adultAges = humanAges.filter(age => age >= 18)

  // const averageAge = adultAges.reduce((acc, age) => 
  //   acc + age, 0)/adultAges.length

    //Use chaining to redefine this code

    const adultAges = humanAges.filter(age => age >= 18)
                               .reduce((acc, age, i, arr) => acc + age/arr.length, 0)

  console.log(humanAges)
  console.log(adultAges)
 // console.log(averageAge)
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
//console.log(humanAge)
// Chaining Methods

/**
 * we can chain the array methods to give us a certain value
 * it should be noted that we can not perform any array method on the reduce method becuase it returns a single value
 * For  example we can perform a operation on the movements array to first filter the deposits and convert it to Dollars
 * and finally give us the total sum of the deposits
 * 
 * NB: DOn't overuse chaining, we should try to optimize it because too much chaining can cause performance problems
 * it is a bad practice to chain methods that mutae the underline original array; like the splice method or reverse method,
 * we can do that but in a small application like the bankist, but in large applications it is not advisable
 */

const totalUSDDeposits = movements.filter(mov => mov > 0)
                                  .map(mov => mov * eurToUsd)
                                  .reduce((acc, mov) => acc + mov, 0)
    console.log(totalUSDDeposits)


/**
 * THE FIND METHOD
 * we can use the find method  to retrive an element of an array base on a condition
 * The find method takes a callback function and loops over an array
 * the find method does not return an array but returns the first element that matches the condition
 * The difference between the find and filter method is that while the filter method returns an array of all the conditions met
 * the find method returns only the first element that matches the condition
 * A good use case scenario is using the find method to implement logining into an application
 */


const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements)
console.log(firstWithdrawal)

// let's use the find method to find a particular user in the acconts object
// the jessica array

console.log(accounts)

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account)

// implementing using the FOR OF loop

for(const accountJessica of accounts){
  if (accountJessica.owner === 'Jessica Davis'){
    console.log(accountJessica)
  }
}
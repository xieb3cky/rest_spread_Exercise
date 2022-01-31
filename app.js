//given this function, refactor it to use the rest operator & an arrow function

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }



const filterOutOdds = (...args) => args.filter(num => num % 2 === 0);


//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

const findMin = (...nums) => nums.reduce((min, nextVal) => (nextVal < min) ? nextVal : min);


// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });


// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...nums) => {
    const numsArr = nums.map((val) => val * 2);
    return [...arr, ...numsArr];
}

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.
//items = ['Jan', 'March', 'April', 'June', 'July', 'August']

const removeRandom = (items) => {
    const idx = Math.floor(Math.random() * items.length);
    console.log(idx)
    const arr1 = items.slice(0, idx)
    const arr2 = items.slice(idx + 1)
    return [...arr1, ...arr2]
}

//Return a new array with every item in array1 and array2
const extend = (array1, array2) => [...array1, ...array2];

//Return a new object with all the keys and values from obj and a new key/value pair.

const addKeyVal = (obj, key, val) => {
    const obj1 = {};
    obj1[key] = val;
    return { ...obj, ...obj1 }
}

//Return a new object with a key removed

const removeKey = (obj, key) => {
    const obj1 = { ...obj };
    delete obj1[key];
    return obj1;
}

//Combine two objects and return a new object
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });


//return a new object with a modified key and value. 
const update = (obj, key, val) => {
    const obj1 = {};
    obj1[key] = val;
    return { ...obj, ...obj1 }
}

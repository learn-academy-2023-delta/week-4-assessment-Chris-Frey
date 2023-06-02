// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("colorChange", () => {
  it("takes an array and removes the first item, the shuffles remaining elements", () => {
    expect(colorChange(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(colorChange(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

const colorChange = (arr) => {
  let sliced = arr.slice(1)
  let randomizer = Math.floor(Math.random * sliced.length)
  for (let index = 0; index < sliced.length; index++) {
    [sliced[index], sliced[randomizer] = sliced[randomizer], sliced[index]]
  }
  return sliced
}
// console.log(slicedAndShuffled(colors1))
// Pseudo code:
// create arrow function 
// slice the input at the first index position of the array
// iterate through the rest of the array 
//   use Math.random to pick a random index and swap the values of the current and picked index
//   return



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.
describe("voteCount", () => {
  it("total upvotes minus downvotes", () => {
    expect(voteCount(votes1)).toEqual(11)
    expect(voteCount(votes2)).toEqual(-31)
  })
})
const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
const voteCount = (votes) => {
  return votes.upVotes - votes.downVotes
}

// Pseudo code:
// create an arrow function that takes 1 object as an argument 
// subtract the downvotes property from the upvotes property
// return the result 

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("singledOut", () => {
  it("takes in 2 arrays and returns 1 array with no duplicates", () => {
    expect(singledOut(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
const singledOut = (arr1, arr2) => {
  let mySet = new Set()
  let fullArray = arr1.concat(arr2)

  fullArray.forEach(element => mySet.add(element));
  return Array.from(mySet)
}

// Pseudo code:
// create an arrow function that takes in 2 arrays 
// create a new variable with the value of an empty `set`
// concatenate the 2 arrays into 1 array 
// run a forEach loop to attempt to add each element to the set
// return resulting set
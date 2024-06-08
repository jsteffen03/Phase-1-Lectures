//Data 
const inventory = [
  {
      id:1,
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      author: 'Marjin Haverbeke',
      price: 10.00,
      reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
      inventory: 10,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      
  },
  {
      id:2,
      title: 'JavaScript & JQuery: Interactive Front-End Web Development',
      author: 'Jon Duckett',
      price: 45.75,
      reviews: [{userID: 15, content:'good way to learn JQuery'}],
      inventory: 2,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
  },
  {
      id:3,
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      price: 36.00,
      reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
      inventory: 8,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
      id:4,
      title: 'JavaScript: The Definitive Guide',
      author: 'David Flanagan',
      price: 25.50,
      reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
      inventory: 0,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
      
  },
  {
      id:5,
      title: 'You Don’t Know JS',
      author: 'Kyle Simpson',
      price: 6.00,
      reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
      inventory: 7,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
  }, 
  {
      id:6,
      title: 'Learn Enough JavaScript to Be Dangerous',
      author: 'Michael Hartl',
      price: 24.00,
      reviews: [{userID: 50, content:'pretty good'}],
      inventory: 5,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

  },
  {
      id:7,
      title: 'Cracking the Coding Interview',
      author: 'Gayle Laakmann McDowell',
      price: 49.95,
      reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
      inventory: 20,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

  }
]

// Function Declaration! All functions are hoisted to the top the code, can be accessed anytime
const day = "Monday" // Const is a constant variable, type error will throw if trying to reassign variable
const x = 25 // can be a string, number, or function
let day2 = "Tuesday" // let variables can be re-assigned

function sayHi(){ // function 
    console.log("Hello")
}
sayHi()// Calling the function

function showPrice(book){  //shows a function with a parameter, accessing the data above by calling the function with the parameter //showPrice(inventory[3])
    console.log(book.price)
}
/*
Anonomous Functions? Another way to write functions!  !!!Anonomous functions are not hoisted!!!
Anonomous Functions  No Name: An anonymous function does not have a name after the "function" keyword.
Assigned to Variables: Often, anonymous functions are assigned to variables. This allows the function to be called using the variable name.
Passed as Arguments: Anonymous functions can be passed as arguments to other functions, especially useful in callbacks.
*/
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]
/*
Used in IIFE: Immediately Invoked Function Expressions are often anonymous. They are executed right after their definition.
*/
(function() {
    console.log("This function runs immediately!");
})();

const subtract = function(num1,num2){  // Anonomous functions are assigned a variable before the function  
    return num1-num2 // to get data out of a function, return the data that you want 
}

// Arrow Functions
//Allow you to write shorter function expressions, a faster way to type a function, can also be used in other functions with out needed to be called

let arrowFunction = (parameter) => {
    return (`this is an arrow function ${parameter}`)
}

// Scoping
// Global Scope // Can be access everywgere
console.log(inventory)
const globalVar = "global"
// Function Scope 
function scopeTesting(var1){    //Variables in the function can be accessed only in the function, 
    console.log(var1)
    const funcScope = "Function"
    console.log(x)
    console.log(globalVar)
    if (true){      // if statements check if something is true and then runs the function below
        const blockScope = "Block"
        console.log(globalVar)
        console.log(blockScope)
        console.log(funcScope)
    } else // can also do an else If with another check if something is true
    function nestedFunc(){ // things in the else are not accessed in the if statement
        const nested = "Nested"
        console.log(nested)
    }
    nestedFunc()
}

scopeTesting("Testing Function Scope")
console.log(x)



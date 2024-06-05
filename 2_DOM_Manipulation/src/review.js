// Functions

// regular

function sayHello(name){
    console.log(`Hello ${name}, Welcome!`)
}



// Anonomous

const addTwo = function (a,b){
    return a + b
}

// Arrow

console.log((a,b) => { return a + b })

// Scope
// Global

const glob = "Global"

// Function

function sayHelloAgain(name){
    console.log(`Hello ${name}, welcome` )
}

sayHelloAgain()

// Block

let printString = ""
num = 4

if(num > 5 ){
    printString = "Greater than 5"
    
} else {
    printString = "Less than 5"
    
}

console.log(printString)

// Before the block
// console.log(age);
// console.log(name);
// console.log(colour);
{
    let age = 2;
    const name = "Sindre";
    var colour = "orange";

// Inside the block
    console.log(age);
    console.log(name);
    console.log(colour);
}

// After the block 
// console.log(age);
// console.log(name);
console.log(colour);

/*
Let and const are block-scoped, which means they can only 
be accessed inside the block where they are declared.
Var is not block-scoped, which means it can be accessed
outside the block where it has been declared.

When console.log() was placed before the block,
the variables could not be accessed because
they had not been declared yet.

When console.log() was placed inside the block, all three
variables could be accessed because they were declared inside
the same block.

When console.log() was placed after the block, let and const
could not be accessed because they are
block-scoped. Var could be accessed because
it was not limited to the block where it was declared. I left it there, because it can 
be accessed without errors.

*/

const add = (num1, num2) => {

    console.log(num1 ? "truthy" : "falsy"); 

    console.log(num1 == 0);
    console.log(num2 === '0');
    console.log(num2 === 0);
    console.log(num1 == NaN);

    if (num1 === null || num2 === null) {
        console.log("At least one number is null");
    }

    if (
        num1 !== null &&
        num1 !== undefined &&
        num2 !== null &&
        num2 !== undefined &&
        typeof num1 === "number" &&
        typeof num2 === "number"

    ) {
        return num1 + num2;
    } else {
        console.log("Invalid input");
    }
};

// Checking 
console.log(add(0, 0));

// Checking if it adds two numbers
console.log(add(5, 3));

// Checking
console.log(add(null, 5));

/* If I created the variable using let instead of const,
I would still be able to create the function.
I could also reassign the variable to another value or function later.
Const does not allow reassignment.

The same function can be created using a function declaration:

function add(num1, num2) {
return num1 + num2;
}

When a function returns something, it sends a result back to 
the place where the function was called.
Here it returned the sum of num1 and num2.
*/


/* A ternary operator is a shorter way to write if/else. 
It checks a condition and returns one value if the condition is true
and another value if the condition is false.
An if statement is longer but allows to write more complex instructions
inside its code blocks.

Two equal signs (==) compare values but allow js to convert their types
before comparing them.
Three equals signs (===) compare both the value and the type, without 
converting them.

I used !== to check that the parameters are not null or undefined.
I also used typeof to check that both parameters are numbers.
I connected all the conditions using && which means every condition
must be true for the function to return the sum.
*/

const num1 = 0;

let arg1;

let sum = false;


console.log(add(sum, 1));
console.log(add("0", 3));
console.log(add(3, "num1"));
console.log(add(-5, num1));
console.log(add(arg1, 7));
console.log(add());

console.log(num1);
console.log(sum);

/* 1. A parameter is a name used in a function definition 
to receive a value. In my function num1 and num2 are parameters.
A variable is a named place where we can store a value.
Here num1, arg1 and sum are variables. An argument is the acutal value
that we pass to a function when we call it. Here in add(5, 3) 5 and 3 are arguments.

2. The value of num1 is 0 because I declared it using const num1 = 0.
The function parameter with the same name is separate from
the variable outside the function because they belong to different scopes.

3. Detailed walkthrough of Test 4: add(-5, num1)

The arguments are -5 and 0, so the parameters receive:
num1 = -5 and num2 = 0.

The ternary operator returns "truthy" because -5 is truthy.

The comparisons return:
num1 == 0        -> false
num2 === '0'     -> false (different types)
num2 === 0       -> true
num1 == NaN      -> false

The OR condition is false because neither parameter is null.

All conditions in the if statement are true because both
parameters are numbers and neither is null or undefined.

The function returns -5 because -5 + 0 = -5.

Return values of the other tests are undefined:

Test 1: Invalid input (false is not a number).
Test 2: Invalid input ("0" is a string).
Test 3: Invalid input ("num1" is a string).
Test 5: Invalid input (arg1 is undefined).
Test 6: Invalid input (no arguments were provided).
*/
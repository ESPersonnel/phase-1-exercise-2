// OBJECTS

// Dot notation and bracket notation

const address = {
    street: {
        number: '123',
        name: 'Main St'
    },
    city: 'Anytown',
    state: 'California',
    zip: '12345'
}

// Dot notation
console.log(address.street.name);
console.log(address.city);

// Bracket notation
console.log(address['state']);
console.log(address['street']['name']);



// Nonstandard keys
const address2 = {
    '123 Main St': 'Anytown',
    '456 Main St': 'Anothertown',
    '789 Main St': 'Yetanothertown'
}

console.log(address2['123 Main St']);
// In this case, the key is a string, so it can be accessed using bracket notation
// You cannot use dot notation to access nonstandard keys


// Accessing Properties Dynamically
const address3 = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'California',
    zip: '12345'
}

let key = 'street';
console.log(address3[key]);
// You cannot use dot notation to access properties dynamically


// JS Object Methods
// Object.keys()
const address4 = {
    street: '123 Main St',
    city: {
        name: 'Anytown',
        population: 12345
    },
    state: {
        name: 'California',
        abbreviation: 'CA'
    },
    zip: '12345'
}
Object.keys(address4);
console.log(Object.keys(address4.city)); // returns ['name', 'population']

// Object.values()
const address5 = {
    street: '123 Main St',
    city: {
        name: 'Anytown',
        population: 12345
    },
    state: {
        name: 'California',
        abbreviation: 'CA'
    },
    zip: '12345'
}
Object.values(address5);
console.log(Object.values(address5)); // returns an array of the values of the object
console.log(Object.values(address5.city)); // returns an array of the values of the object's city property


// Using both Dot Notation and Bracket Notation to calculate the area of a circle
// Dot notation
const circle = {}
circle.radius = 3;
circle.diameter = circle.radius * 2;
circle.area = Math.PI * circle.radius ** 2;
circle.circumference = 2 * Math.PI * circle.radius;
console.log(circle);

// Bracket notation
const circle2 = {}
circle2['radius'] = 3;
circle2['diameter'] = circle2['radius'] * 2;
circle2['area'] = Math.PI * circle2['radius'] ** 2;
circle2['circumference'] = 2 * Math.PI * circle2['radius'];
console.log(circle2);

// const circle3 = {
//     radius: 3,
//     diameter: circle3.radius * 2,
//     area: Math.PI * circle3.radius ** 2,
//     circumference: 2 * Math.PI * circle3.radius
// }
// console.log(circle3);
// ERROR: Cannot access 'circle3' before initialization
// The code won't work because we can't use the variable circle3.radius in the code (we can't reassign the variable by itself)



// Modify a property of an object using dot notation and bracket notation
const mondayMenu = {
    breakfast: 'pancakes',
    lunch: 'hamburger',
    dinner: 'sushi'
}
mondayMenu.breakfast = 'waffles'; // Dot notation
console.log(mondayMenu);
mondayMenu['breakfast'] = 'toast'; // Bracket notation
console.log(mondayMenu);

// Update an Object Nondestructively using the Spread Operator
const tuesdayMenu = {
    breakfast: 'pancakes',
    lunch: 'hamburger',
    dinner: 'sushi'
}
const sundayMenu = {
    ...tuesdayMenu,
    breakfast: 'lasagna'
}
console.log(sundayMenu);
console.log(tuesdayMenu);
// The Spread Operator copies all of the properties of the object it is applied to into a new object
// The Spread Operator can be used to update an object nondestructively
// The Spread Operator can be used to create a new object from an existing object
// The Spread Operator can be used to copy an array

// Remove a property from an object using the delete keyword
const wednesdayMenu = {
    breakfast: 'pancakes',
    lunch: 'hamburger',
    dinner: 'sushi'
}
delete wednesdayMenu.breakfast;
console.log(wednesdayMenu);


// Mindbending stuff, probably not gonna remember this
const myArray = [1, 2, 3, 4, 5];
myArray["1"] = "hello";
console.log(myArray);
myArray["01"] = "world";
console.log(myArray);


// Debugging
const number = 10

function addTwoNumbers(a, b) {
    return a + b;
}

function multiplyByTwo(a) {
    return a * 2;
}
console.log(multiplyByTwo(addTwoNumbers(5, 2)));

// Some questions to consider in debugging:
// Is what we passed in what the function expects?
// Is the thing the fuction returns what we expect?
// Does the operator work as expected?

// Self defined debugging functions
// console.error()
// console.warn()



// TABLES
// Create a table
const family = {
    father: {
        firstName: 'John',
        lastName: 'Doe',
        age: 50
    },
    mother: {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 48
    },
    sister: {
        firstName: 'Sally',
        lastName: 'Doe',
        age: 45
    }
}
console.table(family);



// LOOPS
// For Loop
let books = [
    'The Hobbit',
    'The Lord of the Rings',
    'The Catcher in the Rye',
    'The Great Gatsby',
    'The Grapes of Wrath',
]

function loopThroughBooks(books) {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i]);
    }
}

loopThroughBooks(books);

// For of Loop
let books2 = [
    'The Hobbit',
    'The Lord of the Rings',
    'The Catcher in the Rye',
    'The Great Gatsby',
    'The Grapes of Wrath',
]

function loopThroughBooks2(books2) {
    for (let book of books2) {
        console.log(book);
    }
}
loopThroughBooks2(books2);


// For in Loop
let bookAuthor = {
    George: 'The Lord of the Rings',
    John: 'The Hobbit',
    Jane: 'The Catcher in the Rye',
    Jack: 'The Great Gatsby',
    Jill: 'The Grapes of Wrath',
}

function loopThroughBooks3(bookAuthor) {
    for (let i in bookAuthor) {
        console.log(bookAuthor[i]);
    }
}
loopThroughBooks3(bookAuthor);
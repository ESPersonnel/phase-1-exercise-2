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


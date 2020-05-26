let myBook = {
  title: '1984', //this is a property, a piece of data stored on an object.
  author: 'George Orwell',
  pageCount: 326,
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge Area
// name, age, location
// "Andrew is 27 and lives in Philadelphia."
// Increase age by one and print the message again. 

let myBackground = {
  name: 'Christopher Mendez',
  age: 22,
  location: 'Austin, Texas',
}

console.log(`${myBackground.name} is ${myBackground.age} and lives in ${myBackground.location}.`)

myBackground.age = 23;
console.log(`${myBackground.name} is ${myBackground.age} and lives in ${myBackground.location}.`)


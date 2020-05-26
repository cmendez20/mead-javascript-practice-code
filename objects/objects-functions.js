let myBook = {
  title: '1984', //this is a property, a piece of data stored on an object.
  author: 'George Orwell',
  pageCount: 326,
}

let otherBook = {
  title: 'A People\'s History', //this is a property, a piece of data stored on an object.
  author: 'Howard Zinn',
  pageCount: 723,
}

let getSummary = book => {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`,
  }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge Area
// create a function that take fahrenheit in - return object with all three

let getTempConversion = temp => {
  return {
    celsiusTemp: (temp - 32) * 5 / 9,
    kelvinTemp: (temp + 459.67) * 5 / 9,
  }
}

let tempOne = getTempConversion(50);
console.log(tempOne.celsiusTemp);
console.log(tempOne.kelvinTemp);
console.log(tempOne);
// let tempTwo = getTempConversion(otherBook);
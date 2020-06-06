const notes = [{}, {
  title: 'My next trip',
  body: 'I would like to go to Spain',
}, {
  title: 'Habbits to work on',
  body: 'Exercise. Eating a bit better.',
}, {
  title: 'Office modification',
  body: 'Get a new seat',
}];

// console.log(notes.pop());
// notes.push('My new note');

// console.log(notes.shift());
// notes.unshift('My first note');

// start at index 1, and take out 1 item. 
// notes.splice(1, 1);

// notes.splice(1, 1, 'This is a new item');

// notes[2] = 'This is now the new note 3';

// notes.forEach(function (item, index) {
//   console.log(index);
//   console.log(item);
// })

const findNote = function (notes, noteTitle) {
  const index = notes.findIndex(function (note, index) {
    return note.title === noteTitle;
  });
}

const note = findNote(notes, 'Office modification')
console.log(note);

// console.log(notes.length);
// console.log(notes);

// const index = notes.findIndex(function (note, index) {
//   return note.title === 'Habbits to work on';
// });

// console.log(index);
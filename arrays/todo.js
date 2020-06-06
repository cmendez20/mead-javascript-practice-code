// create aan array with five todos
// You have x todos
// Print the first and second to last items -> Todo: walk the dog

const todos = ['todo 1', 'todo 2', 'todo 3', 'todo 4', 'todo 5'];
// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list

todos.splice(2, 1);
todos.push('new todo');
todos.shift();

console.log(`You have ${todos.length} todos.`);

// 1. First item
// 2. Second Item

todos.forEach(function (todo, index) {
  const num = index + 1;
  console.log(`${num}. ${todo}`)
});



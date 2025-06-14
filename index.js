// Function to write thank you cards
// Function to count down from a given number
function writeCards(names, eventName) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
  }

  return messages;
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

 // Write a function that counts down from a given number to zero
 function countDown() {
  let i = 10;
  while (i >= 0) { 
    console.log (i);
    i --;
  }
 }
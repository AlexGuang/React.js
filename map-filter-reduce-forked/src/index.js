import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
let array = [];
emojipedia.map(function (emoji) {
  array.push(emoji.meaning.substring(0, 100));
});
console.log(array);
let text = emojipedia.find(function (emoji) {
  return (emoji.meaning =
    "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.");
});
console.log(text.meaning.substring(0, 99));

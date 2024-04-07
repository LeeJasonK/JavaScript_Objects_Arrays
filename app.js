

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];
const exampleNumbers = [-10, 22, 14, -7, 3, -4, 5];

function arraySum(nums) {

    let sum = 0; 
//The "easy" way
    for (let i = 0; i < nums.length; i++) {
        // sum = nums[i] + sum; or
        sum += nums[i];
    }
    return sum;
    }


/*
the "hard" way. We want to repeat some task for every number in the array.
  nums.forEach(function (element) {
    sum += element;
  });

  return sum;
}
// iterate to repeat something

console.log(arraySum(numbers));
arraySum(exampleNumbers);
*/

// Exercise 2 Section

let favBook = {};

favBook.title = "Family";
favBook.author = "Pa Chin";
favBook.pageCount = 300;
favBook.readCount = 1;

console.log(favBook);

function info (){

favBook.info = function () {
   return `${this.title} by ${this.author} is ${this.pageCount} pages has been read ${this.readCount} times`;
};
console.log(favBook.info());
}

// Exercise 3 Section
let sentence = "The quick down for jumps over the lazy dog";

function reverseWords(sentence) {
  let result = [];

  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i ++) {
  let letters = words[i].split("");
  letters.reverse();
  let reverseWord = letters.join("");
  result.push(reverseWord);
}
return result.join(" ");
}
console.log(reverseWords(sentence));
console.log(reverseWords("Good morning, john"));






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

//vreate an object
const favBook = {};

favBook.title = "Family";
favBook.author = "Pa Chin";
favBook.numCount = 300;
favBook.readCount = 0;

favBook.info = function () {
   return `${this.title} by ${this.author} is ${this.pageCount} pages has been read ${this.readCount} times`;
}
console.log(favBook.info());

// Exercise 3 Section
function reverseWordsInSentence(sentence) {
 //sentence = "The quick down for jumps over the lazy dog";
const words = sentence.split(" ");
console.log(words);
// Iterate (erpeat a process)
  for (let i = 0; i < words.length; i ++) {

  // each words = words[i]
  const letters = words[i].split("");
    // reverse
  letters.reverse();
  // update someting that lives outside of the for loops's scope
  words[i] = letters.join("");   // array to string
  }
const result = words.join(" ");
return result;
}
console.log(reverseWordsInSentence("The quick down for jumps over the lazy dog"));

// Exercise 4 Section
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function parseCSV(csvString) {
  //strings can .split
  //arrays can .join()
    const lines = csvString.split("\n");
    const headers = lines[0].split(",");

    //create an array to use later. we are going to store the objects in here.
    const resultArray = [];
   //iterate means repeat a process
   for (let i = 0; i < lines.length; i ++) {
       //split the lines into individual data elements
       const data = lines[i].split(",");
       const tempObj = {
         name: data[0],
         age: data[1],
       }
       resultArray.push(tempObj);
      }
       //Ends the function
       //Returns the code to whereever it was before invoking this function
       //And sends back the value
      return resultArray;
     
}  
console.log(parseCSV(csvData));


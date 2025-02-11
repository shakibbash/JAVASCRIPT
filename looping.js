//task-1
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const reverseColors=[];
// for(let i=colors.length-1;i>=0;i--){
//     console.log(reverseColors.push(colors[i]));

// }
// console.log(reverseColors);


//task-2

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const even_numbers=[];
// for(i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         console.log(even_numbers.push(numbers[i]));
   
//     }
 

// }

// console.log(even_numbers);


// task-3
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// var result = '';

// for (var num of numbers) {
//     result += num;
// }

// console.log(result);

// task-4
const statement = 'I am a hard working person';
const words = statement.split(" "); // Convert sentence to an array of words
let reversed = "";

for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i] + " "; // Append words in reverse order
}

console.log(reversed.trim()); // Remove trailing space

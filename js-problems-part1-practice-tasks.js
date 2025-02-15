// task-1
// °F = °C×(9/5)+32



// var FarenhaitTOCelsius=function(C){
//     let F = C*(9/5)+32;
//     return F;
// }


// let C=50;
// console.log(FarenhaitTOCelsius(C));

// task-2

// var NumberCount=function(nums){
//   let count=0;
//      for(const n of nums ){
//         if(nums[n]===25){
//             count++;
//         }
//      }

//      return count;
// }

// let numbers = [5,6,11,12,98, 5];
// console.log(NumberCount(numbers))




// task-3

// var VowelCount=function(str){
// let s=str.split('');
// let vowels=['a','e','i','o','u'];
// let count=0;
// for(const n of s){
//   if(vowels.includes(n)){
//     count++;
//   }
// }

// return count;
// }

// let str='aeioustr';
// console.log(VowelCount(str));



// task-5

// var LongestWord=function(str){
// let s=str.split(' ');
// let maxChar='';
// for(const char of s){
//     if(char.length > maxChar.length){
//           maxChar=char;
//     }
// }
// return maxChar;

// }


// let str='I am learning Programming to become a programmer';
// console.log(LongestWord(str));


// task-5


// Math.floor(Math.random() * (max - min + 1)) + min    (formula random number generate 10 to 20 number);
let randomNum = Math.floor(Math.random() * 11) + 10;
console.log(randomNum);

//task-1
// let sentence="Shaaaaakib";
//  const string=sentence.split('');
// let count=0;
//  for(let i=0;i<string.length;i++){
//         if(string[i]=='a'){
//             count++;
//         }
//  }

//  console.log(count);

// task-2
// let sentence="ShAAaaakib";
//  const string=sentence.split('');
// let count=0;
// let Count=0;
//  for(let i=0;i<string.length;i++){
//         if(string[i]=='a'){
//             count++;
//         }else if(string[i]=='A'){
//             Count++;
//         }
//  }

// console.log(`The letter a has ${count}`);
// console.log(`The letter A has ${Count}`);


// task-3
// let sentence = "aeiou";

// if (sentence.includes('a') && sentence.includes('e') && sentence.includes('i') && sentence.includes('o') && sentence.includes('u')) {
//     console.log("The sentence contains all vowels");
// } else {
//     console.log("Does not contain all vowels");
// }


// task-4
// let string='xXxX';
// let rep='';
// for(let i=0;i<string.length;i++){
//     if(string[i]=='x'){
//          rep+='y';
//     }else if(string[i]=='X'){
//         rep+='Y';
//     }else{
//         rep+=string[i];
//     }
// }

// console.log(rep);


// task-5

// slice(1) means It removes the first character and keeps the rest of the string. 
//words[i][0] → This accesses the first character of the i-th word. 
// let sentence='the boy and girl';
// const words=sentence.split(' ');

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }

// console.log(words.join( ' '))
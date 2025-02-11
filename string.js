// String is immutable>>You can not change the value of element after declare
// Array is mutable>>You can change the value  of element  after declare

// toLowerCase()
// const subject='Math';
// const book='math'
// if(subject.toLowerCase()===book.toLowerCase()){
//     console.log('same text');
// }else{
//     console.log('not same text');
// }


// white spaces

// const water='  water';
// const liquid='      water'
// if(water===liquid){
//     console.log('same text');
// }else{
//     console.log('not same text');
// }

//using trim() white space removes
// const water='  water';
// const liquid='      water'
// if(water.trim()===liquid.trim()){
//     console.log('same text');
// }else{
//     console.log('not same text');
// }



// string slice(start,end before)

// const address='nimtola';
// const part=address.slice(2,5);
// console.log(part);



// string  split() converts string into array works for both string and array
// split after space
// const sentence='I am a good boy';
// console.log(sentence.split(' '));

// split into (,) coma after
// const family='shakib,lira,rahat';
// console.log(family.split(','));

// join() 
// const friends=['Miskat','Akib','Mamun','Shuvo','Shobhan'];
// console.log(friends.join(''));
// console.log(friends.join('|'));
// console.log(friends.join());


// string concat
// const first='Shakib';
// const last='Hossain';

// const Name=first.concat(' ').concat(last);
// console.log(Name);


// Includes search an element

// console.log(last.includes('x'));

// Reverse a string

// const sentence='I am web';
// let reverse='';
// for(const letter of sentence){
//     // console.log(letter);
//     reverse=letter+reverse;
// }

// console.log(reverse);


// 2nd way
// let rev=''
// for(i=0;i<sentence.length;i++){
// const letter=sentence[i];
// rev=letter+rev;
// }
// console.log(rev);

// shortcut way:

// const reversed=sentence.split(' ').reverse().join(' ');
// console.log(reversed);
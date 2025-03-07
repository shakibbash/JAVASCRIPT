// Objects are non-primitive because they are stored by reference, mutable, and can contain multiple values.

// object declare:
// const mobile={
//     brand:'apple',
//     price:699,
//     color:'blue',
//     isClean:false
// // key(property):'value',
// }

// console.log(mobile);


//for of :array;
//for in:object;

// for(const prop in mobile){
  
//     console.log(prop ,':',mobile[prop]);
// }


// array for of loop access value of keys
// const keys=Object.keys(mobile);
// console.log(keys);
//  for(const key of keys){
//     console.log(key ,':',mobile[key])
//  }

// ES-6 MORE TOPICS:

const person={
    name:'hena',
    age:25,
 country:"BD"

}
// new property will be not add outside;{seal}
// Object.seal(person);
// new property and value will be not add outside;{freeze}
// person.age=20;
// person.status="not found";

// Object.freeze(person);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));


// loop through object

for(let [key,value] of Object.entries(person)){
    console.log(`key:${key}   value:${value}`)
}
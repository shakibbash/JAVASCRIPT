// Objects are non-primitive because they are stored by reference, mutable, and can contain multiple values.

// object declare:
const mobile={
    brand:'apple',
    price:699,
    color:'blue',
    isClean:false
// key(property):'value',
}

// console.log(mobile);


//for of :array;
//for in:object;

for(const prop in mobile){
  
    console.log(prop ,':',mobile[prop]);
}


// array for of loop access value of keys
// const keys=Object.keys(mobile);
// console.log(keys);
//  for(const key of keys){
//     console.log(key ,':',mobile[key])
//  }


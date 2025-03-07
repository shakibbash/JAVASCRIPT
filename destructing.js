// Destructing is extraction multiple data from array/object



// const hena={
//     name:'hena',
//     age:25,
//     friends:["hero","alom","bappa"],
//     status:"not found"

// }


// // object destructuring
// the variable name should be same as object
// const {name,age,friends,staus}=hena;
// console.log(age);


const person = ["hero", { name: "gias" }, "alom", "bappa"]


// any variable name can assign the value of that array
const [actor, obj, hello] = person;
console.log(actor, obj, hello);
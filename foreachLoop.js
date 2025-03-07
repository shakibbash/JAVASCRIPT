const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "xiaomi", color: "gold", price: 100, brand: "xiaomi" },
    { id: 3, name: "samsung", color: "gold", price: 1500, brand: "sam" },
    { id: 4, name: "iphone", color: "gold", price: 1000, brand: "apple" },
    { id: 5, name: "xiaomi", color: "black", price: 1100, brand: "xiaomi" }
  ];
  
//   products.forEach(product => {
//     if (product.color === "gold") {
//       console.log(product);
//     }
//   });
  

// filter use

// const newProducts=products.filter(product => product.price>2000)
// console.log(newProducts)
// if we wan a property to remove we can apply this:
const newProducts=products.filter(p => p.id!=3)
console.log(newProducts)


// find use =gives only one property return

const product =products.find(p=>p.id===4);
console.log(product)
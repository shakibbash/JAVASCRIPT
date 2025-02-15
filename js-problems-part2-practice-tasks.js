//task 1
// var LowestNumber=function(heights2){
// let min=heights2[0];
// for(const num of heights2){
//     if(num<min){
//         min=num;
//     }
// }
// return min;


// }



// const heights2 = [167, 190, 120, 165, 137];

// console.log(LowestNumber(heights2));




// task-2
// var LowestNumber=function(heights2){
// let min=heights2[0];
// for(const name of heights2){
//     if(name.length<min.length){
//         min=name;
//     }
// }
// return min;


// }
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// console.log(LowestNumber(heights2));


// task-3

// function calculateElectronicsBudget(laptops, tablets, mobiles) {
//     const laptopPrice = 35000;
//     const tabletPrice = 15000;
//     const mobilePrice = 20000;

//     const totalCost = (laptops * laptopPrice) + (tablets * tabletPrice) + (mobiles * mobilePrice);
    
//     return totalCost;
// }

// // Example usage:
// const total = calculateElectronicsBudget(2, 3, 5); // 2 laptops, 3 tablets, 5 mobiles
// console.log("Total Budget Required: " + total + " tk");




// task-4
// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];


// function findAveragePhonePrice(phones){
//      let sum=0;
//      for(const p of phones){
//         sum=sum+p.price;

//      }

// let average=sum/phones.length;
// return Math.floor(average);


// }


// console.log(findAveragePhonePrice(phones));



// task-5

// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];


// function totalSalary(employees){
    
// let total=0;
// for (let i = 0; i < employees.length; i++){

//     const employee=employees[i];
//     let current_salary=((employee.increment)/12*employee.experience)+employee.starting;
   
//     total=total+current_salary;

// }
// return Math.round(total);
// }

// console.log(totalSalary(employees));
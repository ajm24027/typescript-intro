// let awesome = "It's going to be awesomeeeee!"

// Most of the time, it is not needed to declare a type on a primitive because typescript is smart enough to infer the type being used. 

// awesome.toLocaleLowerCase()

// let value = 1

// let isCool = true


// document.getElementsByTagName('p')[0].innerText = awesome

// tsc <file.name/> --watch is used to "watch" the file as we work on it, so that on save, the recompile happens right away. 

// Additionally, typescript compiles the ts to EJS5 which is the most accessible version of JS to all softwares. 

// function sum(a: number,b: number) {
//   return a + b;
// };

// let result = sum(3,4)

// In this function, because both parameters used are numbers, typescript is expecting a number to be returned.


function applyDiscount(price: number, discountPercentage: number = 50, giveToCharity?: boolean) {
  let newPrice = price - (price*discountPercentage) / 100;
  if (giveToCharity) {
    newPrice --;
  }
 return newPrice;
}

let finalPrice = applyDiscount(300, 50)
console.log(finalPrice)

// Sometimes, parameters passed are optional, or do not occur everytime the function is run. In this case, a "?" is added just before the type for the parameter is declared:

// giveToCharity?: boolean

// Optional parameters must be declared after required parameters



export {};

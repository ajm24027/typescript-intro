# typescript-intro

## About

This is the introduction file to a Typescript Course on Udemy.

https://www.udemy.com/course/typescript-the-beginner-guide/

### Getting Started

When first creating your project create or copy/paste a start script like so into the package.json --> "start": "tsc ./src/index.ts --watch"

The --watch flag will watch the ts file for changes and recompile on save so that we don't manually have to run the compiler.

### Notes on Declaring Types:

Most of the time, it is not needed to declare a type on a primitive because typescript is smart enough to infer the type being used.

#### On Functions

If all of the parameters passed to a function are of the same type, Typescript will automatically expect the return of that function to be of the same type.

### Optional Parameters:

Sometimes, parameters passed are optional, or do not occur everytime the function is run. In this case, a "?" is added just before the type for the parameter is declared.

For Example:
giveToCharity?: boolean

Optional parameters must be declared after required parameters

Additionally, if a default value is added to a parameter, it becomes an optional parameter.

For example:

function applyDiscount(parameter1:type=defaultVal1, parameter2:type=defaultVal2)

function applyDiscount(price: number, discount: number = 0.05)

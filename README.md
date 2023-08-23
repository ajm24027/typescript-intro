# typescript-intro

## About

This is the introduction file to a Typescript Course on Udemy.

https://www.udemy.com/course/typescript-the-beginner-guide/

### Getting Started

#### First Step

First run the following command to initialize and the npm package.

```shell
npm init
```

#### Secondly

Open package.json and copy and paste the following under "scripts" - note that the --watch flag will watch the ts file for changes and recompile on save so that we don't manually have to run the compiler:

```javascript
"start": "tsc ./src/index.ts --watch"
```

#### Lastly

Because the start script has been added tot he package.json, all you need to do is run the following command to both watch for saves and compile the code into ES5 on save.

```shell
npm start
```

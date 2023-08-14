var awesome = "It's going to be awesomeeeee!";
// Most of the time, it is not needed to declare a type on a primitive because typescript is smart enough to infer the type being used. 
awesome.toLocaleLowerCase();
var value = 1;
var isCool = true;
document.getElementsByTagName('p')[0].innerText = awesome;
// tsc <file.name/> --watch is used to "watch" the file as we work on it, so that on save, the recompile happens right away. 
// Additionally, typescript compiles the ts to EJS5 which is the most accessible version of JS to all softwares. 

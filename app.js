// how to print "hello word in nodejs"
console.log("hello world")

// function in nodejs
function print(name){
    console.log(name)
}
print("hello word") 

//results of  some global objects in Nodejs
console.log(process)
console.log(__dirname)
console.log(__filename)
console.log(exports)
console.log(module)
console.log(globalThis)//etc


// functonalties in using nodeJs
let x="i am first";
setTimeout(()=>{console.log("i am last in race")},1000)
let y="i am y"
console.log(x)
console.log(y);

// nodejs modules
// there are 3 modules in nodejs local modules,core modules, third party modules
// core modules are http,fs,dns,crypto,os,path,querystring,event,readline,url,stream,errors

// local modules:create file add logic and export and use in your application
// third party=>npm install is mondatory module name(internet is required)

// implementation local modules modules
const stack=require("./mernstack")
console.log(stack)
console.log(stack.array)
console.log(stack.x()())
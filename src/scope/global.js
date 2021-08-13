var hello = "Hellow";
var hello = "Hello +";

// Im not sure - Con let y const no podemos volver a asignar algún valor
//variables let no puede volver a declararse.
//Solo var puede ser reasignado

let world = "Hellow World";
let world = "Hellow ";
const helloWorld = "Hello Word!"

const anotherFunction  = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () =>{
globalVar = "I am global";
}

helloWorld()
console.log(globalVar)

const anotherFunction = () => {
    var localVar = globalVar = "I am Global"
}

anotherFunction();
console.log(globalVar);
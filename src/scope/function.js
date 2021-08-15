const fruits = () => {
    var fruit = "Apple";
    console.log(fruit);
}

fruits();
console.log(fruit);

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    //let y = 2;
    console.log(x);
    console.log(y);
} 
anotherFunction();

//Let si deja que la variable cambie de valor
let x = 5
x = 2+4;
console.log(x)

//Const no te permite reasignar un valor
const x = 5
x = 2+4;
console.log(x)


var a = "Hello";

function hello () {
    let b = "Hello World";
    const c = "Hello World!";
    if (true) {
        let d = "Hello World!!!"
        debugger
    }
}

const moneyBox = () => {
    var saveCoins =0;
    //Closure
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4); 
myMoneyBox(6);
myMoneyBox(10);

const buildCount = (i) => { 
    let count = i;
    const displayCount = () => {
        console.log(count++); 
    }; 
    return displayCount; 
}

let variable = buildCount(2);

variable();
variable();
variable();


//Const  let solo se pueden llamar en los bloques que fueron creados, var es una declaración global
const fruits = () => { 
	if (true) { 
		var fruit1 = 'apple'; 
		const fruit2 = 'banana'; 
		let fruit3 = 'kiwi'; 
		}
    console.log(fruit1);
} 
fruits()

const helloWorld = () => {
    globalVar = "I'm global"; 
} 
helloWorld();
console.log(" Soy Global : "+ globalVar);

const fruits = () => { 
    var fruit = 'apple';
     console.log(fruit); 
}
fruits();
console.log("Soy global? " + fruit);

 //Crear una alcancía - Función que nos permitirá ver lo que estamos almacenando
 const moneyBox = (coins) => {
    var saveCoins =0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

//MoneyBox con la estructura de un closure
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

myMoneyBox(4); //4
//Recuerda la asignación del valor anterior x1
myMoneyBox(6); //10
//Recuerda la asignación del valor anterior x1
myMoneyBox(10); //10 + 10

const person  = () => {
    var savename = "Franklin";
    return {
        getname : () =>{
            return savename;
        },
        setname: (name) => {
            savename = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getname());
newPerson.setname('Axel');
console.log(newPerson.getname());

// Variables privadas con Closures: 
// JS por su naturaleza no fomenta el uso de datos 
// privados pero por medio de los Closures podemos 
// crear valores que solo puedan ser accedidos por 
// medio de métodos, que no van a estar disponibles 
// fuera de esta función.
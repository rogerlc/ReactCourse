
// ordena numeros
const numbers = [5, 4, 8, 1, 7, 0, 8];
numbers.sort((a, b) => {
    if (a == b) {
        return 0; // el 0 indica que este valor se se queda en un mismo lugar
    }
    if (a > b) {
        return 1; // el 1 indica que este valor se va al final del arreglo
    }
    return -1; // el -1 indica que este valor se va al inicio del arreglo
});
console.log(numbers);

//ordena palabras
const names = ['roger', 'mary', 'martha', 'ana', 'beto'];
names.sort((a, b) => {
    if (a == b) {
        return 0;
    }
    if (a > b) {
        return 1;
    }
    return -1;

})
console.log(names);



//ordena palabras si existe mayusculas y minusculas
const namesMinMay = ['Roger', 'mary', 'Martha', 'Ana', 'beto'];
namesMinMay.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) {
        return 0
    }
    if (a > b) {
        return 1;
    }
    return -1
})
console.log(namesMinMay)


//ordenar objetos
let people = [
    {
        name: 'Roger',
        age: 30,
        sons: 0
    },
    {
        name: 'Ana',
        age: 33,
        sons: 1
    },
    {
        name: 'Beto',
        age: 39,
        sons: 4
    },
    {
        name: 'Alan',
        age: 45,
        sons: 2
    },
    {
        name: 'Karla',
        age: 20,
        sons: 2
    },
];

    
people.sort((a, b) => {
    
    if(a.age > b.age){
        return 1
    }
    if(a.age < b.age){
        return -1        
    }
    
        
    })
    console.log(people);

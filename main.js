/*
// se utiliza el operador spread que es el ...
//Ejemplo de añadir datos de un arreglo en otro arreglo y al final utilizar push
const products=['mesa','silla','teclado'];
const fruits=['peras','manzanas','sandias','frutillas'];
const mercado=[...fruits,'lechuga','papas','uvas'];
 mercado.push('mango');

console.log(products);
console.log(fruits);
console.log(mercado);
*/
/*
//Ejemplo de convinar 2 arreglos en uno solo
const products=['mesa','silla','teclado'];
const fruits=['peras','manzanas','sandias','frutillas'];
const mercado=[...fruits,...products]; 

console.log(products);
console.log(fruits);
console.log(mercado);
*/

/*
//Ejemplo de convinar 2 arreglos mas dos datos mas
const products=['mesa','silla','teclado'];
const fruits=['peras','manzanas','sandias','frutillas'];
const mercado=[...fruits,...products,'papas','uvas']; 

console.log(products);
console.log(fruits);
console.log(mercado);
*/

//Ejemplo de concatenar con concat
const products=['mesa','silla','teclado'];
const product2= products.concat(['notepad'])
const fruits=['peras','manzanas','sandias','frutillas'];
const mercado=[...fruits,'papas','uvas',...products,...product2]; 
const mercado2=[product2.concat(fruits).concat('lechuga','papas','uvas')]; 

console.log(product2);
console.log(mercado);
console.log(mercado2);






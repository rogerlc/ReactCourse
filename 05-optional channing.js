
const invoice={
    id:10,
    nombre:'buy de office',
    fecha: new Date(),    
    client:{
        id:20,
        name:'Roger',
        lastname:'Luna',
        age:30,
    },
    items:[
        {
            id:399,       
            producto:'teclado',
            price:399,
            quantly:2 
        },
        {
            id:11,       
            producto:'mouse',
            price:200,
            quantly:1 
        },
        {
            id:10,       
            producto:'papel',
            price:100,
            quantly:10
        },
    ],   
 
    total: function() {
        let total=0;
        this.items.forEach(item => {
            total = total + item.price*item.quantly;
        });
        return total;
    },
    greeting:function(){
        return `Hola ${this.client.name}`
    }    
};
 // el operador "?" despues de el atributo envia undefien si no existe en vez de enviar un error grave 
console.log(invoice.company?.name)
/*Funcion Normal */
function sayHello(name= 'Roger',age=0){
    const greeting = `Hola mundo ${name} tu edad es de ${age}`
    return greeting;
        //console.log("Hola mundo");
    }
    
    /*Funcion Anonima */
    const sayHelloAn = function(name= 'Roger',age=0){
        const greeting = `Hola mundo ${name} tu edad es de ${age}`
        return greeting;       
        }
    
        
    /*Funcion de flecha */
    
    const sayHelloF = (name= 'Roger',age=0) => { 
        const greeting = `Hola mundo ${name} tu edad es de ${age}`
        return greeting;       
    }
    
    
    /*Funcion de flecha simplificada*/
    const sayHelloFS = (name='Roger',age=29)=>`Hola mundo ${name} tu edad es de ${age}`
    
    const resulte = sayHelloFS('Mary',30);
     console.log(resulte);
    
    
    
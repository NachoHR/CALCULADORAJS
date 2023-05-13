window.addEventListener('load', ()=> {   /*Escuchamos cuando se carga el documento, evitar que el js cargue antes que el documento */ 

/*creamos dos cosntantes una para buscar el display y la otra para buscar los botones  y nos guardamos los elementos que necesitamos*/ 
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');
/* Los notones se aguardan en htmlcollection y Creamos otra cosntante para convertir el HTMlCollection a Array*/ 
    const keypadButtonsArray = Array.from(keypadButtons);
// Iteramos por nuestro nuevo array de botones
    keypadButtonsArray.forEach((button) =>{
        // a cada boton le agregamos un listener
        button.addEventListener('click', ()=> {
            calculadora(button,display);
            console.log(button.innerHTML); /* imprime el innerhtml de cada boton que es el texto qe tiene cada boton */
        })

    })
});

// declaramos una funcion calculadora

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

            case '=' :
            calcular(display);
        
             break;
            
    
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display){
   display.innerHTML= eval(display.innerHTML) /*tomar el string y resolverlo y guardarlo en el innerhtml del display*/

}

function actualizar(display, button){
    if (display.innerHTML == 0) {
        display.innerHTML ='';
    }
    display.innerHTML += button.innerHTML;

}
function borrar(display){
    display.innerHTML=0
}
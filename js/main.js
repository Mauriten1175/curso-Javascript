
alert('El programa pide el ingreso de pares de numeros. Luego nos indica cual es el mayor, el menor, si son iguales y la suma de ambos. El fin del programa viene dado por el ingreso de una letra, vacio o cero.');
let primero = parseInt(prompt('Ingrese el Primer número'));
let segundo = parseInt(prompt('Ingrese el Segundo número'));

while ((primero != 0 && segundo != 0) && (primero*0 == 0 && segundo*0 == 0))  {
    
        if (primero < segundo){
            alert('El numero mayor es: '+ segundo + ' y el menor es: '+primero);
            
        }else if (primero > segundo){
            alert ('El numero mayor es: '+ primero + ' y el menor es: ' +segundo);
        }else{
            alert('Los numero ingresados son iguales')
        }
    suma = primero + segundo;
    alert('La suma de ambos es: ' + suma);
    primero = parseInt(prompt('Ingrese el Primer número'));
    segundo = parseInt(prompt('Ingrese el Segundo número'));
}
alert('Fin');

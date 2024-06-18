import './style.css'


/* 1. Intercambio de Valores: Declara dos variables (a, b) y utiliza una variable auxiliar (temp) para intercambiar sus valores. */

/* let a = 9
let b = 19

console.log('Antes del Intercambio de Valores:')
console.log('a =', a)
console.log('b =', b)

const temp = a
a = b
b = temp

console.log('Después del intercambio de Valores:')
console.log('a =', a)
console.log('b =', b) */





/* 2. Función que reciba 2 números como entrada y determine cuál es el mayor. */

/* function determinarMayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1 + ' es mayor que ' + numero2
    }
    else if (numero2 > numero1) {
        return numero2 + ' es mayor que ' + numero1
    }
    else {
        return 'Ambos números son iguales'
    }
}

const num1 = 2
const num2 = 100

const resultado = determinarMayor(num1, num2)
console.log(resultado) */






/* 3. Función que reciba un número y retorne si es un número dado es par o impar. */

/* function determinarParidad(numero) {
  if (numero % 2 === 0) {
    return numero + ' es un número par'
  }
  else {
    return numero + ' es un número impar'
  }
}

const num = parseInt(prompt('Ingrese un número:'))

if (!isNaN(num)) {
  const resultado = determinarParidad(num)
  console.log(resultado) 
  alert(resultado) 
}
else {
  console.log('Por favor, ingrese un número válido.')
  alert('Por favor, ingrese un número válido.')
} */





/* 4. Funcion que calcula el precio final de un producto después de aplicar un descuento basado en el precio original y el porcentaje de descuento. */

/* function calcularPrecioFinal(precioOriginal, porcentajeDescuento) {
  let descuento = (precioOriginal * porcentajeDescuento) / 100
  let precioFinal = precioOriginal - descuento
  return precioFinal
}

let precioOriginal = parseFloat(
  prompt('Ingrese el precio original del producto:'),
)
let porcentajeDescuento = parseFloat(
  prompt('Ingrese el porcentaje de descuento:'),
)

if (!isNaN(precioOriginal) && !isNaN(porcentajeDescuento)) {
  let precioFinal = calcularPrecioFinal(precioOriginal, porcentajeDescuento)
  console.log('El precio final del producto es: ' + precioFinal.toFixed(2) + ' €',) 
  alert('El precio final del producto es: ' + precioFinal.toFixed(2) + ' €')
}
else {
  console.log('Por favor, ingrese valores válidos.')
  alert('Por favor, ingrese valores válidos.')
} */





/* 5. Función para Calcular Área: Crea una función que reciba el radio de un círculo y devuelva su área. */

/* function calcularAreaCirculo(radio) {
  const PI = Math.PI 
  let area = PI * Math.pow(radio, 2) 
  return area
}

let radio = parseFloat(prompt('Ingrese el radio del círculo:'))

if (!isNaN(radio) && radio > 0) {
  let area = calcularAreaCirculo(radio)
  console.log('El área del círculo es: ' + area.toFixed(2) + ' unidades cuadradas',)
  alert('El área del círculo es: ' + area.toFixed(2) + ' unidades cuadradas')
}
else {
  console.log('(ERROR) Por favor, ingrese un valor válido para el radio.')
  alert('(ERROR) Por favor, ingrese un valor válido para el radio.')
} */






/* 6. Función para Convertir Temperatura: Crea una función que convierta de Celsius a Fahrenheit. */

/* function convertirCelsiusAFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32
  return fahrenheit
}

let celsius = parseFloat(prompt('Ingrese la temperatura en Celsius:'))

if (!isNaN(celsius)) {
  let fahrenheit = convertirCelsiusAFahrenheit(celsius)
  console.log(celsius + ' °C es igual a ' + fahrenheit.toFixed(2) + ' °F')
  alert(celsius + ' °C es igual a ' + fahrenheit.toFixed(2) + ' °F')
}
else {
  console.log('Por favor, ingrese un valor válido para la temperatura.')
  alert('Por favor, ingrese un valor válido para la temperatura.')
} */






/* 7. Bucle for: Utiliza un bucle for para imprimir los números del 1 al 10. */

/* 
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;


for (let i = 1; i <= 10; i++) {
  console.log(i);
} */








/* 8. Bucle while: Utiliza un bucle while para pedir al usuario números hasta que ingrese un número negativo. */

/* let numero = 0;

while (numero >= 0) {
  numero = parseFloat(
    prompt('Ingrese un número (ingrese un número negativo para salir):'),
  );
  if (numero >= 0) {
    console.log('Ingresaste: ' + numero);
  }
}

console.log('Has ingresado un número negativo. Fin del programa.'); */








/* 9. Tabla de Multiplicar: Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10. */

/* let number = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));

if (!isNaN(number)) {
  console.log('Tabla de multiplicar del ' + number + ':')
  
  for (let i = 1; i <= 10; i++) {
    console.log(number + ' x ' + i + ' = ' + (number * i))
  }
}
else {
  console.log('Por favor, ingrese un número válido.')
} */







/* 10. Suma de Números Pares: Calcula la suma de los números pares del 1 al 100. */

/* let suma = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    suma += i
  }
}

console.log('La suma de los números pares del 1 al 100 es: ' + suma) */








/* 11. Objeto Persona: Crea un objeto persona con propiedades como nombre, edad, ciudad y un método presentarse() que muestre un mensaje de presentación. */

/* let persona = {
  nombre: 'Federico',
  edad: 30,
  ciudad: 'Valencia',
  presentarse: function() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`)
  }
}
persona.presentarse()
 */







/* 12. Array de Objetos: Crea un array de objetos persona y utiliza un bucle para mostrar la información de cada persona. */

/* let personas =[
  { nombre: 'Juan', edad: 30, ciudad: 'Madrid' },
  { nombre: 'Ana', edad: 25, ciudad: 'Barcelona' },
  { nombre: 'Luis', edad: 28, ciudad: 'Caracas' },
  { nombre: 'María', edad: 35, ciudad: 'Sevilla' }
]

function mostrarInformacion(persona) {
  console.log(`Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`);
}

for (let i = 0; i < personas.length; i++) {
  mostrarInformacion(personas[i])
} */







/* 13. Función para Calcular Promedio: Crea una función que reciba un array de números y devuelva su promedio. */

/* function calcularPromedio(numeros) {
let suma = 0;
  
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
let promedio = suma / numeros.length
  return promedio
}

let entrada = prompt('Ingrese una lista de números separados por comas:')
let numeros = entrada.split(',').map(Number)
let promedio = calcularPromedio(numeros)

console.log('El promedio es: ' + promedio)
 */

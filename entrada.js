const prompt = require('prompt-sync')();

let nombre = prompt('Ingrese su nombre: ');
console.log(`Hola, ${nombre}. Bienvenido a la clase 3.`);

// Entrada de datos numéricos
let entradaedad = prompt('Ingresa tu edad: ');
let edad = Number(entradaedad);
if (isNaN(edad)) {
    console.log('Error: Debes ingresar un número válido.');
} else {
    console.log(`Tu edad ingresada es: ${edad}`);
}

// Entrada anidada
let edad2 = Number(prompt('Ingresa tu edad: '));

if (isNaN(edad2)) {
    console.log('Error: Debes ingresar un número válido.');
} else {
    if (edad2 >= 18) {
        console.log('Acceso concedido: sos mayor de edad.');
    } else {
        console.log('Acceso denegado: sos menor de edad.');
    }
}

// Ejercicio 1 Calculadora de tarifa de transporte 
let edad3 = Number(prompt('Ingrese su edad: ')); 
let estudiante = prompt('¿Tienes carnet? (si/no): ');
let carnet = estudiante.toLowerCase() === 'si';
let tarifa = 1000;

if (isNaN(edad3)) { 
    console.log('Error: Debes ingresar un número válido.');
} else {
    if (edad3 >= 65 || carnet === true) {
        tarifa = tarifa / 2;
        console.log(`Tu tarifa es: $${tarifa}`); 
    } else {
        console.log(`Tu tarifa es: $${tarifa}`);
    }
}

// Ejercicio 2 Clasificar calificaciones con validación
let nota = Number(prompt('Ingresa la nota asignada: '));

if (isNaN(nota)) {
    console.log('Error: Debes ingresar un número válido.');
} else {
    if (nota <= 5) {
        console.log('Reprobado');
    } else if (nota <= 6) {
        console.log('Aprobado');
    } else if (nota <= 8) {
        console.log('Sobresaliente');
    } else {
        console.log('Excelente');
    }
}

// Ejercicio 3 Becado
let promedio = Number(prompt('Ingrese el promedio general: '));
let money = prompt('¿Ingresos mensuales bajos? (si/no): ');
let ingresof = money.toLowerCase() === 'si';

if (isNaN(promedio)) {
    console.log('Error: Debes ingresar un número válido.');
} else {
    if (promedio >= 8 || ingresof === true) {
        console.log('Felicidades, has sido aceptado en la beca');
    } else {
        console.log('No ha sido aceptado en la beca');
    }
}

// Ejercicio 4 Simulador de Cajero Automático
let saldoInicial = 20000;
let montoARetirar = Number(prompt('Ingrese el monto que desea retirar: '));

if (isNaN(montoARetirar) || montoARetirar <= 0) {
    console.log('Error: Debe ingresar un monto numérico válido y mayor a $0.');
} else if (montoARetirar > saldoInicial) {
    console.log('Error: Fondos insuficientes. El monto supera el saldo disponible.');
} else if (montoARetirar % 100 !== 0) {
    console.log('Error: El monto a retirar debe ser múltiplo de $100.');
} else {
    saldoInicial = saldoInicial - montoARetirar;
    console.log(`Retiro exitoso. Su nuevo saldo disponible es: $${saldoInicial}`);
}

// Ejercicio 5 Control de Acceso por Horarios y Rol
let entradaRol = prompt('Ingrese su rol ("admin" o "invitado"): ');
let rol = entradaRol.toLowerCase().trim();

let entradaHora = prompt('Ingrese la hora actual (0 a 23): ');
let hora = Number(entradaHora);

if (isNaN(hora) || hora < 0 || hora > 23) {
    console.log('Acceso Denegado');
} else {
    if (rol === 'admin') {
        console.log('Acceso Permitido: El rol admin tiene acceso total.');
    } else if (rol === 'invitado' && hora >= 8 && hora <= 18) {
        console.log('Acceso Permitido: Invitado dentro del horario autorizado.');
    } else {
        console.log('Acceso Denegado');
    }
}

// Ejercicio 6: Cotizador de Seguros de Automóvil
let edadConductor = Number(prompt('Ingrese la edad del conductor: '));

if (isNaN(edadConductor) || edadConductor <= 0) {
    console.log('Error: Debe ingresar una edad válida.');
} else if (edadConductor < 21) {
    console.log('No es posible cotizar a menores de 21 años.');
} else {
    let antiguedadAuto = Number(prompt('Ingrese la antigüedad del auto en años: '));

    if (isNaN(antiguedadAuto) || antiguedadAuto < 0) {
        console.log('Error: Debe ingresar una antigüedad válida.');
    } else {
        let precioBase = 15000;
        let precioFinal = precioBase;

        if (antiguedadAuto < 5) {
            precioFinal += 5000;
        }
        if (edadConductor >= 65) {
            precioFinal -= 2000;
        }

      console.log(`\n--- Liquidación del Seguro de Automóvil ---`);
      console.log(`Edad del conductor: ${edadConductor} años`);
     console.log(`Antigüedad del auto: ${antiguedadAuto} años`);
  console.log(`Precio base: $${precioBase}`);
     console.log(`Precio final cotizado: $${precioFinal}`);
    }
}

                                     //GUIA 2 de procesos

// Ejercicio 2: Suma de dos números
let numA = prompt('Ingrese el primer número: ');
let numB = prompt('Ingrese el segundo número: ');

let valor1 = Number(numA);
let valor2 = Number(numB);

let resultadoSuma = valor1 + valor2;
console.log('El resultado de la suma es: ' + resultadoSuma);
// Ejercicio 3: Precio de dos productos y total a pagar
let producto1 = prompt('Ingrese el precio del primer producto: ');
let producto2 = prompt('Ingrese el precio del segundo producto: ');
let precio1 = Number(producto1);
let precio2 = Number(producto2);
let total = precio1 + precio2;
console.log('El total a pagar es: $' + total);
// Ejercicio 4: Suma de edades de dos personas
let edadPersona1 = prompt('Ingrese la edad de la primera persona: ');
let edadPersona2 = prompt('Ingrese la edad de la segunda persona: ');

let e1 = Number(edadPersona1);
let e2 = Number(edadPersona2);
let sumaEdades = e1 + e2;
console.log('La suma de las edades es: ' + sumaEdades);
// Ejercicio 5: Suma de dos notas de un estudiante
let notaUnidad1 = prompt('Ingrese la primera nota: ');
let notaUnidad2 = prompt('Ingrese la segunda nota: ');

let n1 = Number(notaUnidad1);
let n2 = Number(notaUnidad2);

let sumaNotas = n1 + n2;
console.log('La suma de las dos notas es: ' + sumaNotas);
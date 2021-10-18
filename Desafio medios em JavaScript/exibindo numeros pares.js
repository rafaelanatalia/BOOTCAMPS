/*Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.*/

i = 0
let valor;

valor = parseInt(gets())

if (valor > 0 || valor % 2 === 0) {
while (i < valor) {
i = i + 2
if (i > valor) {
break
} else {
console.log(i)
}
}
}
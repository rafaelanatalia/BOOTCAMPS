/*Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos. Em seguida, apresente a quantidade de valores positivos digitados.*/

var n1 = parseFloat(gets());
var n2 = parseFloat(gets());
var n3 = parseFloat(gets());
var n4 = parseFloat(gets());
var n5 = parseFloat(gets());
var n6 = parseFloat(gets());
var i = 0;

if (n1 > 0) {
   i++
} 

if (n2 > 0) {
   i++
} 

if (n3 > 0) {
   i++
} 

if (n4 > 0) {
   i++
} 

if (n5 > 0) {
   i++
} 

if (n6 > 0) {
   i++
} 

console.log(i + " valores positivos");
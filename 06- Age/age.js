function calculateAge(){
let currentYear = 2024;
let birthYear = document.getElementById("birthInput").value;
let age = currentYear - Number(birthYear);
// let birthYear = 1999;
// let age = currentYear - birthYear;

document.getElementById("age").innerHTML = age;
}
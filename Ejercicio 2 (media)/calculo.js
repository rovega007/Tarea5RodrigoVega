
let num1, num2;
let val1, val2;


val1 = window.prompt("Ingrese primer nota");
num1 = parseFloat(val1);
val2 = window.prompt("Ingrese segunda nota");
num2 = parseFloat(val2);
val3 = window.prompt("Ingrese tercer nota");
num3 = parseFloat(val3);

let resultado = (num1+num2+num3)/3;



if(resultado >= 5){
    window.alert(`Alumno aprobado! Nota: ${resultado}`);
    console.log("Alumno aprobado!");
    const p = document.createElement("p");
    p.textContent=`Alumno aprobado! Nota: ${resultado}`
    document.body.appendChild(p);
    
} else{
    window.alert(`Alumno suspendido! Nota: ${resultado}`);
    const p = document.createElement("p");
    p.textContent=`Alumno suspendido! Nota: ${resultado}`
    document.body.appendChild(p);
}
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["El Perro", "Mi Tio", "Su Gato", "El Aguila"];
let action = ["se trago", "perdio", "quemo", "quebro"];
let what = ["mi telefono", "las llaves", "mi moto"];
let when = ["antes de clases", "ayer", "esta manana"];

window.onload = function() {
  let excusa = excuse(who, action, what, when);
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excusa;
};

function excuse(array1, array2, array3, array4) {
  let whoRandomNumber = Math.floor(Math.random() * array1.length);
  let actionRandomNumber = Math.floor(Math.random() * array2.length);
  let whatRandomNumber = Math.floor(Math.random() * array3.length);
  let whenRandomNumber = Math.floor(Math.random() * array4.length);

  return (
    array1[whoRandomNumber] +
    " " +
    array2[actionRandomNumber] +
    " " +
    array3[whatRandomNumber] +
    " " +
    array4[whenRandomNumber]
  );
}

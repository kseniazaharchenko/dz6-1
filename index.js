let birthYear = prompt("Введіть рік свого народження:");
let city = prompt("Введіть місто, де ви живете:");
let favoriteSport = prompt("Введіть ваш улюблений вид спорту:");

let age = new Date().getFullYear() - birthYear;

let message;
if(city === "Одеса") {
  message = "Ти живеш у столиці України.";
} else if(city === "Вашингтон") {
  message = "Ти живеш у столиці США.";
} else if(city === "Лондон") {
  message = "Ти живеш у столиці Великої Британії.";
} else {
  message = `Ти живеш у місті ${city}.`;
}

message += ` Твій вік: ${age}. Твій улюблений вид спорту: ${favoriteSport}.`;

alert(message);
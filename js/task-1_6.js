let input;
let total = 0;

input = prompt("Write a number");

while (input) {
  let value = Number(input);
  if (isNaN(input)) {
    window.alert(`Было введено не число, попробуйте еще раз`);
    input = prompt("Write a number");
  } else {
    total += value;
    input = prompt("Write a number");
  }
}
window.alert(`Общая сумма чисел равна ${total}`);

// do {
//     input = prompt("Write a number");
//     if (isNaN(input)) {
//         window.alert(`Было введено не число, попробуйте еще раз`);
//     }
//     else {
//     total += Number(input);
//     input = prompt("Write a number");
//   }
// }
// while()

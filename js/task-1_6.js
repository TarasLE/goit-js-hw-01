let input;
let total = 0;
// console.log(input);

input = prompt("Write a number");
while (input) {
  let value = Number(input);
  if (isNaN(value)) {
    window.alert(`Было введено не число, попробуйте еще раз`);
    input = prompt("Write a number");
  } else {
    total += value;
    input = prompt("Write a number");
  }
}
window.alert(`Общая сумма чисел равна ${total}`);

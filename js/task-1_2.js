// JS_HT1_TASK 1/2

let invoice = 50;
const stock = 100;

let message;

if (invoice <= stock) {
  message = "Заказ оформлен, с вами свяжется менеджер";
  console.log(message);
} else {
  message = "На складе недостаточно товаров!";
  console.log(message);
}

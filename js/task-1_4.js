const orderPieces = 5;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice;
let balanceCredit;
let message;

if (orderPieces === null || orderPieces < 0) {
  message = CANCELED_BY_USER;
  console.log(message);
} else if (orderPieces * pricePerDroid <= credits) {
  balanceCredit = credits - orderPieces * pricePerDroid;
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
  console.log(message);
} else {
  message = ACCESS_DENIED;
  console.log(message);
}

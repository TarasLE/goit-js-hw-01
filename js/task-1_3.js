const userPassword = "jqueryismyjam";
// const userPassword = null;
// const userPassword = "123";

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
let message;

if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
  console.log(message);
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
  console.log(message);
} else {
  message = ACCESS_DENIED;
  console.log(message);
}

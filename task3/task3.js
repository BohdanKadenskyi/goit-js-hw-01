const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

do {
  message = prompt('ADMIN_PASSWORD:');

  if (message === null) {
    console.log('Отменено пользователем!');
  } else if (message === ADMIN_PASSWORD) {
    console.log('Добро пожаловать!');
  } else if (message !== ADMIN_PASSWORD) {
    console.log('Доступ запрещен, неверный пароль!');
  }
} while (console.log(alert(message)));

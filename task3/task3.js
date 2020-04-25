const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt('ADMIN_PASSWORD:');

if (message === null) {
  console.log('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
  console.log(alert('Добро пожаловать!'));
} else {
  console.log(alert('Доступ запрещен, неверный пароль!'));
}

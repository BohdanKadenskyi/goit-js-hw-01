let input = prompt('Какое количество дроидов желаите преобрести?');
const credits = 23580;
let pricePerDroid = 3000;
const totalPrice = input * pricePerDroid;

if (input === null) {
  console.log(alert('Отменено пользователем!'));
} else {
  input = Number(input);
  const notNumber = Number.isNaN(input);
  if (notNumber) {
    console.log(alert('Было введено не число, попробуйте еще раз'));
  } else {
    prompt('Общая сумма', totalPrice);
  }
  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else if (totalPrice - credits) {
    console.log(
      `Вы купили ${input} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
    alert(
      `Вы купили ${input} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`,
    );
  }
}

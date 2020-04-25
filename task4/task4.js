const credits = 23580;
let pricePerDroid = 3000;

do {
  let input = prompt('Какое количество дроидов желаите преобрести?');

  if (input === null) {
    console.log(alert('Отменено пользователем!'));
  }

  input = Number(input);
  const notNumber = Number.isNaN(input);
  if (notNumber) {
    console.log(alert('Было введено не число, попробуйте еще раз'));
    continue;
  }

  const totalPrice = input * pricePerDroid;

  if (input !== null) {
    console.log(prompt('Общая сумму:', totalPrice));
    if (totalPrice > credits) {
      console.log(alert('Недостаточно средств на счету!'));
      continue;
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
} while (true);

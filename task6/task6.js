let input;
let total = 0;

do {
  input = prompt('Enter number');

  if (input === null) {
    console.log('Cancel');
    break;
  }

  input = Number(input);
  const notNumber = Number.isNaN(input);
  if (notNumber) {
    console.log(alert('Было введено не число, попробуйте еще раз'));
    continue;
  }
  total += input;
} while (true);

console.log(alert(`Общая сумма чисел равна ${total}.`));

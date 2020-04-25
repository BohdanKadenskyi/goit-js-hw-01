const userInput = prompt('Оформить доставку товара к себе в страну');
let credits;

if (userInput === null) {
  console.log('Отмена');
}

const countryName = userInput.toLowerCase();

switch (countryName) {
  case 'китай':
    credits = 100;
    break;

  case 'чили':
    credits = 250;
    break;

  case 'австралия':
    credits = 170;
    break;

  case 'индия':
    credits = 80;
    break;

  case 'ямайка':
    credits = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
    break;
}
console.log(
  `Доставка в ${
    countryName[0].toUpperCase() + countryName.substring(1)
  } будет стоить ${credits} кредитов.`,
);

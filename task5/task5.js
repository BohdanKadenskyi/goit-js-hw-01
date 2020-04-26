const userInput = prompt('Оформить доставку товара к себе в страну');
let credits;

if (userInput === null) {
  console.log('Отмена');
}

const countryName = userInput.toLowerCase();

switch (countryName) {
  case 'китай':
    credits = 100;
    console.log(
      `Доставка в ${
        countryName[0].toUpperCase() + countryName.substring(1)
      } будет стоить ${credits} кредитов.`,
    );
    break;

  case 'чили':
    credits = 250;
    console.log(
      `Доставка в ${
        countryName[0].toUpperCase() + countryName.substring(1)
      } будет стоить ${credits} кредитов.`,
    );
    break;

  case 'австралия':
    credits = 170;
    console.log(
      `Доставка в ${
        countryName[0].toUpperCase() + countryName.substring(1)
      } будет стоить ${credits} кредитов.`,
    );
    break;

  case 'индия':
    credits = 80;
    console.log(
      `Доставка в ${
        countryName[0].toUpperCase() + countryName.substring(1)
      } будет стоить ${credits} кредитов.`,
    );
    break;

  case 'ямайка':
    credits = 120;
    console.log(
      `Доставка в ${
        countryName[0].toUpperCase() + countryName.substring(1)
      } будет стоить ${credits} кредитов.`,
    );
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

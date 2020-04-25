const country = prompt('Оформить доставку товара к себе в страну');
let credits;

if (country === null) {
  console.log('Отмена');
} else if (country !== null) {
  switch (country) {
    case 'Китай':
      credits = 100;
      break;

    case 'Чили':
      credits = 250;
      break;

    case 'Австралия':
      credits = 170;
      break;

    case 'Индия':
      credits = 80;
      break;

    case 'Ямайка':
      credits = 120;
      break;

    default:
      alert('В вашей стране доставка не доступна');
      break;
  }

  console.log(`Доставка в ${country} будет стоить ${credits} кредитов.`);
}

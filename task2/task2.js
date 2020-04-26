const total = 100; //(количество товаров на складе)
const ordered = 50; // (единиц товара в заказе).
let message;

if (total < ordered) {
  message = 'На складе недостаточно товаров!';
} else {
  message = 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(message);

{
  const ordered = 20;
  if (total < ordered) {
    message = 'На складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }
  console.log(message);
}

{
  const ordered = 80;
  if (total < ordered) {
    message = 'На складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }
  console.log(message);
}

{
  const ordered = 130;
  if (total < ordered) {
    message = 'На складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }
  console.log(message);
}

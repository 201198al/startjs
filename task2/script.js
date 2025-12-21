const consolelog = document.querySelector('#consolelog');
const alertEl = document.querySelector('#alert');
const promptEl = document.querySelector('#prompt');

consolelog.addEventListener('click', () => {
  alert('Служит для вывода информации в консоль');
});

alertEl.addEventListener('click', () => {
  alert('Выводит сообщение пользователю');
});

promptEl.addEventListener('click', () => {
  prompt('Введите текст');
});
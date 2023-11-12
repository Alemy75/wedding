import "./style.scss"

// Установка даты, до которой считаем таймер
const targetDate = new Date('2023-12-22T14:00:00').getTime();

// Обновление таймера каждую секунду
const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  // Текущая дата и время
  const now = new Date().getTime();

  // Оставшееся время в миллисекундах
  const timeRemaining = targetDate - now;

  // Расчет дней, часов, минут и секунд
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Отображение таймера
  const timerElement = document.getElementById('timer');
  timerElement.innerHTML = `
    <div><span>${days}</span> дней</div>
    <div><span>${hours}</span> часов</div>
    <div><span>${minutes}</span> минут</div>
    <div><span>${seconds}</span> секунд</div>
  `;

  // Проверка, если таймер истек
  if (timeRemaining < 0) {
    clearInterval(timerInterval);
    timerElement.innerHTML = '<h2>Таймер истек!</h2>';
  }
}
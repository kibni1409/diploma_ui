export const initialHTML = '<head lang="ru">\n' +
  '  <meta charset="UTF-8">\n' +
  '  <title>Учимся делать слайдер</title>\n' +
  '  <link rel="stylesheet" type="text/css" href="styles.css">\n' +
  '</head>\n' +
  '<body>\n' +
  '  <main>\n' +
  '    <h1 class="page-title">Пример работы слайдера</h1>\n' +
  '    <div class="slider-container">\n' +
  '    <div class="slider">\n' +
  '      <img src="https://i.postimg.cc/nhsTGkLQ/1.png" alt="Белый пушистый кот">\n' +
  '      <img src="https://i.postimg.cc/cLVh9nKk/2.png" alt="Рыжий пушистый кот в джинсах">\n' +
  '      <img src="https://i.postimg.cc/4NxWmZkP/3.png" alt="Бело-рыжий пушистый кот">\n' +
  '      <img src="https://i.postimg.cc/FFZPrzq1/8.png" alt="Золотистый пушистый кот">\n' +
  '      <img src="https://i.postimg.cc/jd3Zf9Rb/7.png" alt="Золотистый пушистый кот">\n' +
  '    </div>\n' +
  '    <button class="prev-button" aria-label="Посмотреть предыдущий слайд">&lt;</button>\n' +
  '    <button class="next-button" aria-label="Посмотреть следующий слайд">&gt</button>\n' +
  '  </div>\n' +
  '  </main>\n' +
  '  \n' +
  '  <script src="script.js"></script>\n' +
  '</body>'


export const initialCSS = `
.page-title {
  text-align: center;
}

.slider-container {
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: white;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
`
export const initialJavaScript = `
// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();
`
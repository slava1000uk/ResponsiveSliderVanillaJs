const sliderList = document.querySelector('.slider__list');
const sliderFrame = document.querySelector('.slider');
const imgs = document.querySelectorAll('.img');
let count = 0;
let width;


function moveSlider() {
  sliderList.style.left ='-' + count * width + 'px';
}


function init() {
  width = sliderFrame.offsetWidth;

  sliderList.style.width = width * imgs.length + 'px';
  imgs.forEach(item => {
    item.style.width = width + 'px';
  });

  moveSlider(); // move slider using updated width
}

init();

window.addEventListener('resize', function () {
  init();
});

document.querySelector('.control.previous').addEventListener('click', function () {
  count--;
  if (count < 0) {
    count = imgs.length - 1;
  } 

  moveSlider();
})

document.querySelector('.control.next').addEventListener('click', function () {
  count++;
  
  if (count > imgs.length - 1) {
    count = 0;
  } 

  moveSlider();

})

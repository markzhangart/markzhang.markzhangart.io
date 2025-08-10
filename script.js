
const images = document.querySelectorAll('#gallery img');

const prevBtn = document.getElementById('prev');

const nextBtn = document.getElementById('next');

let current = 0;



function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
    img.style.zIndex = i === index ? 1 : 0; // 当前图片放到最上层
  });
  current = index;
}


prevBtn.addEventListener('click', () => {
  
let nextIndex = current - 1;
  
if (nextIndex < 0) nextIndex = images.length - 1;
  
showImage(nextIndex);

});



nextBtn.addEventListener('click', () => {
  
let nextIndex = current + 1;
  
if (nextIndex >= images.length) nextIndex = 0;
  
showImage(nextIndex);

});



// 初始化显示第一张
showImage(0);

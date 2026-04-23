const circle = document.querySelector('.cursor-circle');

let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

const speed = 0.1;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  posX += (mouseX - posX) * speed;
  posY += (mouseY - posY) * speed;

  circle.style.left = posX + 'px';
  circle.style.top = posY + 'px';

  requestAnimationFrame(animate);
}

animate();


const interactiveElements = document.querySelectorAll('a, button, .tab-buttons label, .lightbox-trigger');

interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    circle.style.transform = 'translate(-50%, -50%) scale(2)';
  });

  el.addEventListener('mouseleave', () => {
    circle.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});
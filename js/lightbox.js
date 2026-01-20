const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const caption = lightbox.querySelector('.lightbox-caption'); // <- updated

document.querySelectorAll('.lightbox-trigger').forEach(img => {
  img.addEventListener('click', (e) => {
    lightboxImg.src = e.target.src;
    caption.textContent = e.target.dataset.caption || '';
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
  setTimeout(() => {
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }, 400);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('show')) {
    lightbox.classList.remove('show');
    setTimeout(() => {
      lightboxImg.src = '';
      document.body.style.overflow = '';
    }, 400);
  }
});

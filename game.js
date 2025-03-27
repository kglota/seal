document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('game-popup');
    const popupImg = document.getElementById('game-popup-img');
    const bubbles = document.querySelectorAll('.bubble');
  
    if (!popup || !popupImg || bubbles.length === 0) return;
  
    bubbles.forEach(bubble => {
      bubble.addEventListener('click', () => {
        const imgPath = bubble.getAttribute('data-popup');
        popupImg.src = imgPath;
        popup.classList.add('show');
      });
    });
  
    popup.addEventListener('click', () => {
      popup.classList.remove('show');
    });
  });
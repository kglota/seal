document.addEventListener('DOMContentLoaded', function () {
  const hiButton = document.getElementById('hi-btn');
  const coinsButton = document.getElementById('coins-btn');
  const vipButton = document.getElementById('vip-btn');

  const brokePopup = document.getElementById('broke-popup');
  const vipPopup = document.getElementById('vip-popup');

  function showPopup(popupElement) {
    if (popupElement) {
      popupElement.classList.add('show');
    }
  }

  function hidePopupOnClick(popupElement) {
    if (popupElement) {
      popupElement.addEventListener('click', () => {
        popupElement.classList.remove('show');
      });
    }
  }

  if (coinsButton) {
    coinsButton.addEventListener('click', () => {
      showPopup(brokePopup);
    });
  }

  if (vipButton) {
    vipButton.addEventListener('click', () => {
      showPopup(vipPopup);
    });
  }

  hidePopupOnClick(brokePopup);
  hidePopupOnClick(vipPopup);

  if (hiButton) {
    hiButton.addEventListener('click', () => {
      const chatMessages = document.querySelectorAll('.chat-message');
      chatMessages.forEach(msg => {
        msg.classList.add('hidden');
      });
      console.log('Hi clicked — seals hidden');
    });
  }
});

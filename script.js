document.addEventListener('DOMContentLoaded', function () {
  const hiButton = document.getElementById('hi-btn');
  const coinsButton = document.getElementById('coins-btn');
  const vipButton = document.getElementById('vip-btn');

  const brokePopup = document.getElementById('broke-popup');
  const vipPopup = document.getElementById('vip-popup');

  // 🔹 Show popup helper
  function showPopup(popupElement) {
    if (popupElement) {
      popupElement.classList.add('show');
    }
  }

  // 🔹 Hide popup on click
  function hidePopupOnClick(popupElement) {
    if (popupElement) {
      popupElement.addEventListener('click', () => {
        popupElement.classList.remove('show');
      });
    }
  }

  // 💬 "Can I have coins?" button
  if (coinsButton) {
    coinsButton.addEventListener('click', () => {
      showPopup(brokePopup);
    });
  }

  // 💬 "How do I become VIP??" button
  if (vipButton) {
    vipButton.addEventListener('click', () => {
      showPopup(vipPopup);
    });
  }

  // ❌ Clicking popup closes it
  hidePopupOnClick(brokePopup);
  hidePopupOnClick(vipPopup);

  // 👋 "Hi!" button hides the seals
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

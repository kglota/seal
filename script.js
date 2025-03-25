document.addEventListener('DOMContentLoaded', function () {
    const hiButton = document.getElementById('hi-btn');
    const coinsButton = document.getElementById('coins-btn');
    const vipButton = document.getElementById('vip-btn');
    const messageSeals = document.querySelectorAll('.chat-message');
    const brokePopup = document.getElementById('broke-popup');
    const vipPopup = document.getElementById('vip-popup');
  
    // Hide the seals when "Hi!" is clicked
    hiButton.addEventListener('click', function () {
      messageSeals.forEach(seal => {
        seal.style.display = 'none';
      });
    });
  
    // Show the "broke" popup when "Can I have coins?" is clicked
    coinsButton.addEventListener('click', function () {
      brokePopup.classList.remove('hidden');
    });
  
    // Show the "VIP" popup when "How do I become VIP??" is clicked
    vipButton.addEventListener('click', function () {
      vipPopup.classList.remove('hidden');
    });
  
    // Close the popups when clicked
    brokePopup.addEventListener('click', function () {
      brokePopup.classList.add('hidden');
    });
  
    vipPopup.addEventListener('click', function () {
      vipPopup.classList.add('hidden');
    });
  });
  
// main.js
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Lütfen tüm alanları doldurunuz.');
    event.preventDefault();
  }
});
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Daha Fazla Göster';
toggleButton.style.marginTop = '20px';
document.querySelector('main').appendChild(toggleButton);
toggleButton.addEventListener('click', () => {
  const extraContent = document.createElement('p');
  extraContent.textContent = 'Bu içerik Daha Fazla Göster butonuna basıldıktan sonra görünür.';
  document.querySelector('main').appendChild(extraContent);
  toggleButton.remove();
});

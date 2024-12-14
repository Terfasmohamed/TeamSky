const menu = document.getElementById('menu');
const box = document.getElementById('box');
menu.addEventListener('click', function () {
  if (box.style.display === 'none' || box.style.display === '') {
    box.style.display = 'flex'; 
  } else {
    box.style.display = 'none'; 
  }
});
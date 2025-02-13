const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
  alert("Yay! You made my day! 💖");
});
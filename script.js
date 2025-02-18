const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${currentSize + 5}px`;
  yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) + 5}px ${parseFloat(window.getComputedStyle(yesBtn).paddingLeft) + 10}px`;
});

yesBtn.addEventListener('click', () => {
  createFestiveEffect();
  alert('Ana ba! Kawatan takag kiss ron, hehe!💖');
});

function createFestiveEffect() {
  const numBalloons = 10;
  const numHearts = 20;

  for (let i = 0; i < numBalloons; i++) {
    createBalloon();
  }

  for (let i = 0; i < numHearts; i++) {
    createHeart();
  }
}

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = `${Math.random() * 100}vw`;
  balloon.style.animationDuration = `${Math.random() * 3 + 2}s`;
  document.body.appendChild(balloon);

  balloon.addEventListener('animationend', () => {
    balloon.remove();
  });
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
  document.body.appendChild(heart);

  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}
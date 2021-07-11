const images = [
  '0.jpg',
  '1.jpeg',
  '2.jpeg',
  '3.jpeg',
  '4.jpeg',
  '5.jpeg',
  '6.jpeg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector('body');

bgImage.style.background = `url(img/${chosenImage}) center center no-repeat`;

bgImage.style.backgroundSize = `cover`;

bgImage.style.height = `100vh`;

// bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);

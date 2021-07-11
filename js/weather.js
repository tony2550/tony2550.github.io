const API_KEY = 'c04814f1cbedf112b9054f1c9671c17f';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      console.log(data.name, data.weather[0].main);

      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert('Can`t find you. No weather for you.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

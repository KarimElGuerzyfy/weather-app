lucide.createIcons();
const themeToggle = document.getElementById("theme-toggle");
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
const input = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const tempValue = document.getElementById("temp-value");
const windConditionsText = document.getElementById("wind-conditions-text");
const humidityValue = document.getElementById("humidity-value");
const windSpeedValue = document.getElementById("wind-speed-value");
const cityName = document.getElementById("city-name");
const API_KEY = '540ef555f1cb281b6370820c995691c7';

async function fetchWeather(url) {
  const response = await fetch(url);
  const data = await response.json();
  if (data.cod !== 200) {
    showToast('City not found. Please try again.');
    return;
  }
  displayWeather(data);
};

// Fetch weather by coordinates
async function fetchWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetchWeather(url);
};
// Fetch weather by City
async function fetchWeatherByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetchWeather(url);
};

//Gelocation
navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchWeatherByCoords(lat, lon);
  },
  (error) => {
    console.log('Geolocation denied');
  }
);

//The display Function
function displayWeather(data) {
  const country = data.sys.country === 'DZ' ? 'زريبة الكراغلة' : regionNames.of(data.sys.country);
  cityName.textContent = `${data.name}, ${country}`;
  tempValue.textContent = `${Math.round(data.main.temp)}°C`;
  windConditionsText.textContent = data.weather[0].description;
  humidityValue.textContent = `${data.main.humidity}%`;
  windSpeedValue.textContent = `${Math.round(data.wind.speed)} km/h`;
};

// Search by city name
searchBtn.addEventListener('click', handleSearch);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

function handleSearch() {
  const citySearch = input.value.trim();
  if (citySearch === '') return;
  fetchWeatherByCity(citySearch);
  input.value = '';
};

//The Toast Function
function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = 'background:rgba(0,0,0,0.8);color:white;padding:16px 24px;border-radius:16px;font-size:16px;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,0.15);animation:slideUp 0.3s ease;white-space:nowrap;text-align:center;min-width:200px;';
  
  const container = document.getElementById('toast-container');
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};

//Dark Theme
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  themeToggle.innerHTML = isDark 
    ? '<i data-lucide="sun"></i>' 
    : '<i data-lucide="moon"></i>';
  lucide.createIcons();
});




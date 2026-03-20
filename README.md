# My Weather App

A weather application built with vanilla JavaScript that displays real-time weather data for any city in the world.

## Features

- Automatically detects the user's location using the browser's Geolocation API and displays local weather on load
- Search weather by city name with keyboard (Enter) and mouse (click) support
- Displays temperature, weather condition, humidity and wind speed
- Toast notifications for errors (city not found, invalid search)
- Light and dark mode toggle
- Responsive design — works on mobile and desktop
- Graceful fallback when geolocation is denied

## Technologies Used

- Vanilla JavaScript (no frameworks)
- Tailwind CSS v4
- OpenWeatherMap API
- Lucide Icons
- HTML5 Geolocation API
- Intl.DisplayNames API for country name formatting

## What I Learned

- How to fetch data from a real REST API using async/await
- How to work with the browser's Geolocation API
- How to manipulate the DOM to display dynamic data
- How to handle errors gracefully with user-friendly feedback
- How to build a responsive UI with Tailwind CSS
- How to structure JavaScript code cleanly with single-responsibility functions

## What I Would Do Differently

- Store the API key in an environment variable instead of the source code
- Add a loading state while weather data is being fetched
- Add a 5-day forecast section
- Use the OpenWeatherMap weather icons instead of plain text conditions
- Add unit toggle between Celsius and Fahrenheit

## Author

Built by Karim El Guerzyfy — first JavaScript project, started learning February 2026
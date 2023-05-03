export default async function fetchWeatherData(location) {
  if (!location) location = "london";
  const forecastResponse = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=a960293cd53d42bd911182230230904&q=${location}&days=8`
  );

  const forecastData = await forecastResponse.json();

  return formatWeatherData(forecastData);
}

async function formatWeatherData(data) {
  await data;

  const weatherData = {
    location: {
      country: data.location.country,
      name: data.location.name,
      region: data.location.region,
      localtime: data.location.localtime,
    },
    current: {
      condition: {
        text: data.current.condition.text,
        icon: data.current.condition.icon,
      },
      temperatures: {
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        feelsLike_c: data.current.feelslike_c,
        feelsLike_f: data.current.feelslike_f,
      },
      wind: {
        direction: data.current.wind_dir,
        wind_mph: data.current.wind_mph,
        wind_kph: data.current.wind_kph,
        wind_degree: data.current.wind_degree,
      },
    },
    forecast: {
      astro: {
        is_sun_up: data.forecast.forecastday[0].astro.is_sun_up,
        is_moon_up: data.forecast.forecastday[0].astro.is_moon_up,
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
      },
      date: data.forecast.forecastday[0].date,
      hour: data.forecast.forecastday[0].hour,
    },
    weekly: data.forecast.forecastday,
  };

  return weatherData;
}

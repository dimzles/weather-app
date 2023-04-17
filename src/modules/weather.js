export default async function fetchWeatherData(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=a960293cd53d42bd911182230230904&q=${location}`
  );

  const data = await response.json();

  formatWeatherData(data);
}

async function formatWeatherData(data) {
  await data;

  const myData = {
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
      },
    },
  };

  console.log(myData);
}

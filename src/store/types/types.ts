export type Weather = {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  dt: number;
  timezone: number;
  wind: {
    speed: number;
  };
};

export type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  error: string;
};

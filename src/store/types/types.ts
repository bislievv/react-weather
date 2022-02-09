export type Weather = {
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  weather: [
    {
      icon: string;
    }
  ];
  name: string;
  dt: number;
  timezone: number;
  wind: {
    speed: number;
  };
};

export type dailyWeather = {
  daily: any[];
};

export type weekWeather = {
  weekWeather: dailyWeather;
  isLoading: boolean;
  error: string;
};

export type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  error: string;
};

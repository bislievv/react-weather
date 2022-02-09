import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { fetchWeather } from "../thunks/currentWeatherThunks";
import { CurrentWeather, Weather } from "../types/types";

const initialState: CurrentWeather = {
  weather: {
    coord: {
      lat: 0,
      lon: 0,
    },
    main: {
      temp: 0,
      pressure: 0,
      humidity: 0,
    },
    weather: [
      {
        icon: "",
      },
    ],
    name: "",
    dt: 0,
    timezone: 0,
    wind: {
      speed: 0,
    },
  },
  isLoading: false,
  error: "",
};

export const currentWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchWeather.pending, (state: CurrentWeather) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchWeather.fulfilled,
      (
        state: CurrentWeather,
        action: PayloadAction<AxiosResponse<Weather>>
      ) => {
        state.isLoading = false;
        state.weather = action.payload.data;
      }
    );
    builder.addCase(
      fetchWeather.rejected,
      (state: CurrentWeather, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export default currentWeatherSlice.reducer;

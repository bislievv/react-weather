import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { fetchWeatherWeek } from "../thunks/weekWeatherThunks";
import { dailyWeather, weekWeather } from "../types/types";

const initialState: weekWeather = {
  weekWeather: {
    daily: [],
  },
  isLoading: false,
  error: "",
};

export const weekWeatherSlice = createSlice({
  name: "week_weather",
  initialState,
  reducers: {
    removeLastItem: state => {
      state.weekWeather.daily.pop();
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchWeatherWeek.pending, (state: weekWeather) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchWeatherWeek.fulfilled,
      (
        state: weekWeather,
        action: PayloadAction<AxiosResponse<dailyWeather>>
      ) => {
        state.isLoading = false;
        state.weekWeather = action.payload.data;
      }
    );
    builder.addCase(
      fetchWeatherWeek.rejected,
      (state: weekWeather, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { removeLastItem } = weekWeatherSlice.actions;

export default weekWeatherSlice.reducer;

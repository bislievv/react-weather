import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeatherWeek = createAsyncThunk(
  "weather/week/fetch",
  async (latLot: { lat: number; lon: number }, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latLot.lat}&lon=${latLot.lon}&exclude=current,minutely,hourly,alerts&appid=5a6d8861e9566e99c166a0e5ca97b429&units=metric&lang=ru`
      );
      return response;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

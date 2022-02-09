import { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { fetchWeatherWeek } from "../../store/thunks/weekWeatherThunks";
import { Days } from "./components/Days/Days";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss"

const Home = () => {
    const dispatch = useCustomDispatch();
    const weather = useCustomSelector(state => state.currentWeatherSliceReducer.weather);

    useEffect(() => {
        dispatch(fetchWeatherWeek(weather?.coord))
    }, [weather])

    return <div className={s.home}>
        <div className={s.wrapper}>
            <ThisDay weather={weather} />
            <ThisDayInfo weather={weather} />
        </div>
        <Days />
    </div>
};

export default Home;

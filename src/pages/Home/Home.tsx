import { useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors";
import { Days } from "./components/Days/Days";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss"

const Home = () => {
    const { weather } = useCustomSelector(selectCurrentWeatherData);

    return <div className={s.home}>
        <div className={s.wrapper}>
            <ThisDay weather={weather} />
            <ThisDayInfo weather={weather} />
        </div>
        <Days />
    </div>
};

export default Home;

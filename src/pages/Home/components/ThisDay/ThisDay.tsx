import { getTime } from '../../../../helpers/getTime';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';

interface thisDayProps {
    weather: Weather
}

export const ThisDay = ({ weather }: thisDayProps) => {
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather-icon" width="119px" />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Время: <span>{getTime(weather.timezone)}</span>
                </div>
                <div className={s.this__city}>
                    Город: <span>{weather.name}</span>
                </div>
            </div>
        </div>
    );
};
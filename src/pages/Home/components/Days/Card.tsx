import { ucFirst } from '../../../../helpers/ucFirst';
import s from './Days.module.scss';

interface daysCardProps {
  daily: any;
  weekDays: string;
}

export const Card = ({ daily, weekDays }: daysCardProps) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{weekDays}</div>
      <div className={s.img}>
        <img src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} alt="weather-icon" width="74px" />
      </div>
      <div className={s.temp__day}>{Math.floor(daily.temp.day)}°</div>
      <div className={s.temp__night}>Ночью {Math.floor(daily.temp.night)}°</div>
      <div className={s.info}>{ucFirst(daily.weather[0].description)}</div>
    </div>
  );
};
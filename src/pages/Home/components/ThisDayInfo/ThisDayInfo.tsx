import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';
import { Weather } from '../../../../store/types/types';
import { IndicatorSvgSelector } from '../../../../assets/icons/IndicatorSvgSelector';

interface Props {
    weather: Weather
}

export const ThisDayInfo = ({ weather }: Props) => {
    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                <ThisDayItem icon="temp" info={`${Math.floor(weather.main.temp)}° по цельсию`} name="Температура" />
                <ThisDayItem icon="pressure" info={`${weather.main.pressure} мм ртутного столба`} name="Давление" />
                <ThisDayItem icon="precipitation" info={`${weather.main.humidity}%`} name="Влажность" />
                <ThisDayItem icon="wind" info={`${weather.wind.speed} м/с`} name="Ветер" />
            </div>
            <img className={s.cloud__img} src={cloud} alt="облако" />
        </div>
    );
};
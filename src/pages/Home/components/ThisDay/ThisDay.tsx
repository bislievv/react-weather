import { GlobalSvgSelector } from "../../../../assets/icons/GlobalSvgSelector"
import { getTime } from '../../../../helpers/getTime';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';

interface Props {
    weather: Weather
}

export const ThisDay = ({ weather }: Props) => {
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id="sun" />
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
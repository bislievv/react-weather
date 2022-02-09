import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/GlobalSvgSelector';
import { ucFirst } from '../../../../helpers/ucFirst';
import { Day } from './Days';

import s from './Days.module.scss';

interface Props {
  daily: any;
  weekDays: string;
}

export const Card = ({ daily, weekDays }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{weekDays}</div>
      <div className={s.day__info}>31 August</div>
      <div className={s.img}>
        <img src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} alt="weather-icon" width="74px" />
      </div>
      <div className={s.temp__day}>{Math.floor(daily.temp.day)}°</div>
      <div className={s.temp__night}>Ночью {Math.floor(daily.temp.night)}°</div>
      <div className={s.info}>{ucFirst(daily.weather[0].description)}</div>
    </div>
  );
};
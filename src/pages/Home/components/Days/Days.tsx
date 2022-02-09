import { Card } from './Card';
import { Tabs } from './Tabs';
import s from './Days.module.scss';
import { dateBuilder } from '../../../../helpers/daysWeek';
import { selectWeekWeatherData } from '../../../../store/selectors';
import { useCustomSelector } from '../../../../hooks/store';

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = () => {
  const weekDays = dateBuilder(new Date());
  const { daily } = useCustomSelector(selectWeekWeatherData)
  console.log(daily)
  return (
    <>
      <Tabs />
      <div className={s.days}>
        {daily?.map((item, index) => (
          <Card daily={item} key={item.dt} weekDays={weekDays[index]} />
        ))}
      </div>
    </>
  );
};
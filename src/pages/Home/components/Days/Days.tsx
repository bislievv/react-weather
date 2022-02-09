import { days } from '../../../../data';
import { Card } from './Card';
import { Tabs } from './Tabs';
import s from './Days.module.scss';

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = () => {
  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => (
          <Card day={day} key={day.day} />
        ))}
      </div>
    </>
  );
};
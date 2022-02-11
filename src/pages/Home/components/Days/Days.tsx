import { Card } from './Card';
import { Tabs } from './Tabs';
import s from './Days.module.scss';
import { dateBuilder } from '../../../../helpers/daysWeek';
import { selectWeekWeatherData } from '../../../../store/selectors';
import { useCustomSelector } from '../../../../hooks/store';

export const Days = () => {
  const weekDays = dateBuilder(new Date());
  const { daily } = useCustomSelector(selectWeekWeatherData)

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
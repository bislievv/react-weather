import { IndicatorSvgSelector } from "../../../../assets/icons/IndicatorSvgSelector"
import s from './ThisDayInfo.module.scss';

export interface thisDayItemProps {
  icon: string;
  name: string;
  info: string;
}

export const ThisDayItem = (props: thisDayItemProps) => {
  const { icon, name, info } = props;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon} />
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{info}</div>
    </div>);
};
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';
import { options } from '../../data';
import { useCustomDispatch } from '../../hooks/store';
import { fetchWeather } from '../../store/thunks/currentWeatherThunks';
import s from "./Header.module.scss"

export const Header = () => {
  const dispatch = useCustomDispatch();
  const [city, setCity] = useState("Грозный")

  useEffect(() => {
    dispatch(fetchWeather(city))
  }, [city])

  const handleChange = (e: any) => {
    setCity(e.label)
  }

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      width: "194px",
      height: "37px",
      border: "none",
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      borderRadius: "10px",
      zIndex: 100,
    })
  }

  return <header className={s.header}>
    <div className={s.wrapper}>
      <div className={s.logo}><GlobalSvgSelector id="header-logo" /></div>
      <div className={s.title}>React Weather</div>
    </div>
    <div className={s.wrapper}>
      <Select defaultValue={options[0]} styles={colourStyles} options={options} onChange={handleChange} />
    </div>
  </header>;
};

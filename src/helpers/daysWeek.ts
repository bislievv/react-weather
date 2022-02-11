export function dateBuilder(d: any) {
  const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  const date = [];

  for (let count = 0; count < 8; count++) {
    if (d.getDay() + count < 7) date[count] = d.getDay() + count;
    else if (d.getDay() + count === 7) date[count] = 0;
    else if (d.getDay() + count === 8) date[count] = 1;
    else if (d.getDay() + count === 9) date[count] = 2;
    else if (d.getDay() + count === 10) date[count] = 3;
    else if (d.getDay() + count === 11) date[count] = 4;
    else if (d.getDay() + count === 12) date[count] = 5;
    else if (d.getDay() + count === 13) date[count] = 6;
  }

  return [
    days[date[0]],
    days[date[1]],
    days[date[2]],
    days[date[3]],
    days[date[4]],
    days[date[5]],
    days[date[6]],
    days[date[7]],
  ];
}

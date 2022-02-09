export const getTime = (timezone: number): string => {
  let date = new Date();
  let localTime = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let atlanta = utc + 1000 * timezone;
  return new Date(atlanta).toLocaleTimeString();
};

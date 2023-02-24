import { addZero } from "./methods";

export function getLastDay (m: number) {
  const year = 2023;
  const feb = 29 - +!!(year % 4);
  const months = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return months[m - 1];
}

export function deconstructDate (date: string) {
  const components = date.split ('/');
  return ({ d: +(components[0]), m: +(components[1]), y: +(components[2]) });
}

export function correctDateFormat (date: string) {
  const { d: m, m: d, y } = deconstructDate(date);
  return `${d}/${m}/${y}`;
}

export function getDefaultDateRange () {
  const { d, m, y } = deconstructDate (correctDateFormat (new Date().toLocaleDateString ()));
  const targetMonth = m + 3;
  const targetDate = `01/${addZero (targetMonth)}/${y}`;
  return [ `${addZero (d)}/${addZero (m)}/${y}`, targetDate ];
  /*
  const todayTime = today.getTime ();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth ();
  const todayMonthTime = (getLastDay (todayMonth + 1) - todayDate) * 86400000;
  const targetDate = todayTime + 86400000 * (getLastDay (todayMonth + 2) + getLastDay (todayMonth + 3)) + todayMonthTime;
  return new Date(targetDate);
  */
}

export function getDateRange (start: string, end: string) {
  const { d: d1, m: m1, y } = deconstructDate (start);
  const { d: d2, m: m2, } = deconstructDate (end);
  const dateRange: string[] = [];
  const firstMonth: string[] = [...Array(getLastDay (m1) - d1).keys()].map ((d: number) => `${y}-${addZero(m1)}-${addZero(d + d1 + 1)}`);
  const lastMonth: string[] = m1 < m2 ? [...Array(d2).keys()].map ((d: number) => `${y}-${addZero(m2)}-${addZero(d + 1)}`) : [];
  for (let m = m1 + 1;m < m2;m++) {
    dateRange.push (...[...Array(getLastDay (m)).keys()].map ((d) => `${y}-${addZero(m)}-${addZero(d + 1)}`));
  }
  return [`${y}-${addZero(m1)}-${addZero(d1)}`, ...firstMonth, ...dateRange, ...lastMonth];
}


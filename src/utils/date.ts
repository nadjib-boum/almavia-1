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


export function addZero (n: number) {
  return n < 10 ? `0${n}` : `${n}`;
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


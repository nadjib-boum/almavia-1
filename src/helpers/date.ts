export function getFirstDateOfMonth(): Date {
  return new Date(new Date().setDate(1));
}

export function getDateRange(startDate: Date, n: number = 0): Date[] {
  let d: Date | undefined;
  let range: Date[] = [];
  for (let i = 0; i < n; i++) {
    d = new Date(startDate);
    d.setDate(d.getDate() + i);
    range.push(d);
  }
  return range;
}

export function getFormulateDateRange(range: Date[]): string[] {
  return range.map((d: Date) => d.toLocaleDateString("en-GB"));
}

export function formulateResponseDate(date: string): string {
  return date.split("-").reverse().join("/");
}

function setDateToDefaultFormat(date: string) {
  const [d, m, y] = date.split("/");
  return `${m}/${d}/${y}`;
}

export function getFromToday(dates: string[]): string[] {
  const fullDates = dates.map(
    (date: string) => new Date(setDateToDefaultFormat(date))
  );
  return fullDates
    .filter((date: Date) => date >= new Date())
    .map((date: Date) => date.toLocaleDateString("en-GB"));
}

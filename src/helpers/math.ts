export function addZero(n: number) {
  return +n < 10 ? `0${n}` : `${n}`;
}

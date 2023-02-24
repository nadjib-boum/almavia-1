export function sleep (t: number) {
  return new Promise ((r) => setTimeout (r, t))
}

export function addZero (n: number) {
  return +n < 10 ? `0${n}` : `${n}`;
}

export type InputData = {
  date_range: {
    default: boolean;
    first_date: string;
    last_date: string;
  }
}

export type APIDates = {
  date: string;
  isHoliday: boolean 
}
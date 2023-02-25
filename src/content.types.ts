export type DateRange = {
  default: boolean;
  first_date: string;
  last_date: string;
}

export type InputData = {
  date_range: DateRange
}

export type APIDates = {
  date: string;
  isHoliday: boolean; 
}

export type MessageRequest = {
  source: string;
  command: string;
}
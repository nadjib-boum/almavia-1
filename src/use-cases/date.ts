import {
  getDateRange,
  getFirstDateOfMonth,
  getFormulateDateRange,
} from "../helpers/date";

export type DateRangeEdges = {
  start: string;
  end: string;
};

export function getTargetRange(): string[] {
  const firstDateOfMonth = getFirstDateOfMonth();
  const targetRange = getDateRange(firstDateOfMonth, 90);
  const formulatedDateRange = getFormulateDateRange(targetRange);
  return formulatedDateRange;
}

export function getDateRangeEdges(): DateRangeEdges {
  const targetRange = getTargetRange();
  const dateRangeEdges: DateRangeEdges = {
    start: targetRange[0],
    end: targetRange[targetRange.length - 1],
  };
  return dateRangeEdges;
}

export type APIParams = {
  start: string;
  end: string;
  IDtypology: number;
  IdCategory: number;
  siteId: number;
  persons: number;
};

export function bindAPIParams(apiParams: APIParams): string {
  const { start, end, IDtypology, IdCategory, siteId, persons } = apiParams;
  const BASE_URL =
    "https://eg.almaviva-visa.services/api/sites/disabled-dates/";
  const urlParams = `start=${start}&end=${end}&siteId=${siteId}&persons=${persons}&IDtypology=${IDtypology}&IdCategory=${IdCategory}`;
  return `${BASE_URL}?${urlParams}`;
}

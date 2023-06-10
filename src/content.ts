import { getData } from "./utils/http";
import {
  getDateRange,
  correctDateFormat,
  getDefaultDateRange,
} from "./utils/date";
import { sleep, addZero } from "./utils/methods";
import type { DateRange, APIDates } from "./content.types";

import { createElement } from "./utils/dom";

Script();

async function Script() {
  try {
    const { buttons: buttonsData, date_range } = await fetchConfig();
    constructUI({ buttonsData, date_range });
  } catch (err: any) {
    console.error(err);
  }
}

function constructUI({ buttonsData, date_range }: any) {
  const app = createElement("div", {
    id: "myApp",
    style:
      "position: absolute;top: 0;left: 0;padding: 10px;background: #FFF;z-index:999999;display: flex;flex-flow: row wrap;gap: 10px;",
  });
  for (const buttonData of buttonsData) {
    const button = createElement("button", {}, app);
    button.addEventListener("click", () => {
      checkDates({ buttonData, date_range });
    });
    button.textContent = buttonData.label;
  }
}

async function checkDates({ date_range, buttonData }: any) {
  let first_date, last_date;

  if (date_range.default === false) {
    first_date = date_range.first_date;
    last_date = date_range.last_date;
  } else {
    const defaultDateRange = getDefaultDateRange();
    first_date = defaultDateRange[0];
    last_date = defaultDateRange[1];
  }

  try {
    const currentDate = new Date().toLocaleString().split(",")[1].trim();
    const fullDateRange: string[] = getDateRange(first_date, last_date);
    const targetRange: string[] = (
      await fetchDates({ start: first_date, end: last_date, buttonData })
    ).map((d: APIDates) => d.date);
    const results: string[] = fullDateRange.filter(
      (d: string) => !targetRange.includes(d)
    );
    if (results.length === 0) {
      console.log(
        `%c [${currentDate}] No Available Appointments On Range [${first_date} - ${last_date}] `,
        "color: orange;font-size: 15px;font-weight: bold;"
      );
      // await sleep(300000);
      // checkDates(date_range, times + 1);
    } else {
      console.log(
        `%c [${currentDate}] There Are ${results.length} Appointment Available On Range [${first_date} - ${last_date}] `,
        "color: #0f0;font-size: 15px;font-weight: bold;"
      );
      console.table(results);
    }

    return;
  } catch (err) {
    console.log(err);
    console.log(
      "%c Service Unavailable",
      "color: #f00;font-size: 17px;font-weight: bold;"
    );
    await sleep(300000);
  }
}

async function fetchDates(data: any) {
  const { start, end, buttonData } = data;
  const { IDtypology, idCategory, siteId } = buttonData;
  const endpoint = `https://eg.almaviva-visa.services/api/sites/disabled-dates/?start=${start}&end=${end}&siteId=${siteId}&persons=1&IDtypology=${IDtypology}&IdCategory=${idCategory}`;
  const dates = await getData(endpoint, {
    method: "GET",
  });
  return dates;
}

async function fetchConfig() {
  try {
    const path = chrome.runtime.getURL("config.json");
    const data = await getData(path, {
      method: "GET",
    });
    return data;
  } catch (err: any) {
    return Promise.reject(err);
  }
}

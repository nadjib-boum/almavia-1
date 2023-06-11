import { fetchAPIDates, fetchConfig } from "../use-cases/http";
import { createAPIButtons } from "../use-cases/dom";
import { formulateResponseDate } from "../helpers/date";
import {
  type DateRangeEdges,
  getDateRangeEdges,
  getTargetRange,
} from "../use-cases/date";
import type { Message } from "../utils/message";
import type { APIParams } from "../helpers/api";
import type { ButtonsData } from "./script.types";

window.onload = OnPopupLoad;

async function OnPopupLoad() {
  const apiButtonsContainer = document.querySelector(".api-buttons");
  const { buttons: buttonsData }: { buttons: ButtonsData[] } =
    await fetchConfig();
  const apiButtons: HTMLElement[] = createAPIButtons(
    apiButtonsContainer,
    buttonsData
  );
  const preparedButtonsData: APIParams[] = prepareButtonsData(buttonsData);
  bindAPICallToButton(apiButtons, preparedButtonsData);
}

function messageListener(message: Message) {
  const { action, payload } = message;
  switch (action) {
    default:
      console.log("Unknown message", message);
      break;
  }
}

function bindAPICallToButton(
  buttons: HTMLElement[],
  apiParams: APIParams[]
): void {
  buttons.forEach((button, i: number) => {
    button.addEventListener("click", async () => {
      const apiRes = await fetchAPIDates(apiParams[i]);
      const apiDatesRange: string[] = apiRes.map(
        (item: { date: string; isHoliday: boolean }) =>
          formulateResponseDate(item.date)
      );
      const fullRangeDate: string[] = getTargetRange();
      const availableDates = getAvailableDates(apiDatesRange, fullRangeDate);
      // console.log(apiDatesRange, fullRangeDate);
      console.table(availableDates);
    });
  });
}

function prepareButtonsData(buttonsData: ButtonsData[]): APIParams[] {
  const { start, end }: DateRangeEdges = getDateRangeEdges();
  return buttonsData.map((buttonData: any) => ({ ...buttonData, start, end }));
}

function getAvailableDates(
  apiDatesRange: string[],
  fullRangeDate: string[]
): string[] {
  return fullRangeDate.filter((date: string) => !apiDatesRange.includes(date));
}

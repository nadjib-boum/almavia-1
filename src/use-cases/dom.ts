import { fetchAPIDates } from "./http";
import { getTargetRange } from "./date";
import domUtil from "../utils/dom";
import { formulateResponseDate, getFromToday } from "../helpers/date";
import type { ButtonData } from "../content.types";
import { exclude } from "../helpers/array";
export function createAppContainer() {
  const appContainer = domUtil.createElement(
    "div",
    "",
    document.body,
    {},
    { id: "appContainer" }
  );
  return appContainer;
}

export function createAPIButtonContainer(parent: HTMLElement) {
  const apiButtonsContainer = domUtil.createElement(
    "div",
    "",
    parent,
    {},
    { class: "api-buttons-container" }
  );
  return apiButtonsContainer;
}

export function createAPIButtons(
  parent: HTMLElement | Element | null,
  buttonsData: ButtonData[]
): HTMLElement[] {
  const buttons: HTMLElement[] = [];
  buttonsData.forEach((button: ButtonData, i: number) => {
    const { label } = button;
    buttons.push(
      domUtil.createElement("button", label, parent, {
        click: async () => {
          try {
            const apiRes = await fetchAPIDates(button);
            const apiDatesRange: string[] = apiRes.map(
              (item: { date: string; isHoliday: boolean }) =>
                formulateResponseDate(item.date)
            );
            const fullRangeDate: string[] = getTargetRange();
            const availableDates = getFromToday(
              exclude(apiDatesRange, fullRangeDate)
            );
            console.log(`%c ${label}`, "font-size:18px;color: #0f0");
            console.table(availableDates);
          } catch (err: any) {
            console.log("%c API ERROR", "font-size:20px;color: #f00");
            console.log(err);
          }
        },
      })
    );
  });
  return buttons;
}

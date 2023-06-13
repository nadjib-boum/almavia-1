import {
  createAppContainer,
  createAPIButtonContainer,
  createAPIButtons,
} from "./use-cases/dom";
import { fetchConfig } from "./use-cases/http";
import {
  type DateRangeEdges,
  getDateRangeEdges,
  getTargetRange,
} from "./use-cases/date";

import type { ContentData, ButtonData } from "./content.types";

ContentScript();

async function ContentScript() {
  const { buttons: buttonsJSONData } = await fetchConfig();
  const apiButtonParams = prepareButtonsData(buttonsJSONData);
  await renderUI({ apiButtonParams });
}

async function renderUI({ apiButtonParams }: ContentData) {
  const appContainer = createAppContainer();
  const apiButtonContainer = createAPIButtonContainer(appContainer);
  const apiButtons = createAPIButtons(apiButtonContainer, apiButtonParams);
}

function prepareButtonsData(buttonsJSONData: any): ButtonData[] {
  const { start, end }: DateRangeEdges = getDateRangeEdges();
  return buttonsJSONData.map((buttonData: any) => ({
    ...buttonData,
    start,
    end,
  }));
}

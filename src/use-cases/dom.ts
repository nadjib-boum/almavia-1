import DOMUtil from "../utils/dom";

type ButtonsData = {
  label: string;
};

export function createAPIButtons(
  parent: HTMLElement | Element | null,
  buttonsData: ButtonsData[]
): HTMLElement[] {
  const buttons: HTMLElement[] = [];
  for (const button of buttonsData) {
    const { label } = button;
    buttons.push(DOMUtil.createElement("button", label, parent));
  }
  return buttons;
}

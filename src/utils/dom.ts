type DOMAttributes = {
  [key: string]: string | number | boolean;
};

type DOMEvents = {
  [name: string]: (event: Event) => void;
};

interface IDOMUtil {
  createElement: (
    name: string,
    text: string,
    parent: HTMLElement | null,
    events?: DOMEvents,
    attributes?: DOMAttributes
  ) => HTMLElement;
}

class DOMUtil implements IDOMUtil {
  createElement(
    name: string,
    text: string,
    parent: HTMLElement | Element | null = document.body,
    events?: DOMEvents,
    attributes?: DOMAttributes
  ): HTMLElement {
    const element = document.createElement(name);

    parent?.appendChild(element);

    element.textContent = text;

    if (events) {
      for (const event in events) {
        element.addEventListener(event, events[event]);
      }
    }

    if (attributes) {
      for (const attr in attributes) {
        element.setAttribute(attr, attributes[attr].toString());
      }
    }
    return element;
  }
}

const domUtil = new DOMUtil();

export default domUtil;

export function createElement(
  name: string,
  attributes: { [key: string]: any },
  parent: HTMLElement = document.body
) {
  const element = document.createElement(name);
  for (const attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  }
  parent?.appendChild(element);
  return element;
}

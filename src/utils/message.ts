export async function sendMessageToPopup(target: {
  source: "popup" | "content";
  command: string;
  data: any;
}) {
  chrome.runtime.sendMessage(target);
}

export type Message = {
  action: string;
  payload: any;
};

interface IMessageUtil {
  sendMessageToPopup(message: Message): void;
  sendMessageToContent(message: Message): void;
  listen(
    cb: (message: Message, sender?: any, sendResponse?: any) => void
  ): void;
}

class MessageUtil implements IMessageUtil {
  sendMessageToPopup(message: Message): void {
    chrome.runtime.sendMessage(message);
  }

  sendMessageToContent(message: Message): void {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id!, message);
    });
  }

  listen(
    cb: (message: Message, sender?: any, sendResponse?: any) => void
  ): void {
    chrome.runtime.onMessage.addListener(cb);
  }
}

const messageUtil = new MessageUtil();

export default messageUtil;

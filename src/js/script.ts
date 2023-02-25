const stopAlarmBtn = document.getElementById('stopAlarm');
stopAlarmBtn?.addEventListener ('click', async (e: MouseEvent) => {
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  if (tab.id) {
    const response = await chrome.tabs.sendMessage(tab.id, {source: "popup", command: "pause-alarm"});
    console.log(response);
  }
});
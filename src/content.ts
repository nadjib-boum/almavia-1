import { getData } from './utils/http';
import { getDateRange, correctDateFormat, getDefaultDateRange } from './utils/date';
import { sleep, addZero } from './utils/methods';
import type { InputData, DateRange, APIDates, MessageRequest } from './content.types';

Script ();

async function Script () {
  injectAlarm ();
  pauseAlarmListener ();
  const { date_range }: InputData = await fetchInputData ();
  await checkDates (date_range);
}

async function checkDates (date_range: DateRange, times: number=1) {
  let first_date, last_date;

  if (date_range.default === false) {
    first_date = date_range.first_date;  
    last_date = date_range.last_date;  
  } else {
    const defaultDateRange = getDefaultDateRange ();
    first_date = defaultDateRange[0];
    last_date = defaultDateRange[1];
  }
  
  try {
    console.log (`%c [${addZero (times)}] Script is running on: ${correctDateFormat (new Date ().toLocaleString())}`, 'font-weight: bold;');
    const fullDateRange: string[] = getDateRange (first_date, last_date);
    const targetRange: string[] = (await fetchDates (first_date, last_date)).map ((d: APIDates) => d.date);
    const results: string[] = fullDateRange.filter ((d: string) => !targetRange.includes(d)); 
    console.log ('%c Service Available', 'color: #0f0;font-size: 17px;font-weight: bold;');
    console.table (results);
    runAlarm ();
    return;
  } catch (err) {
    console.log ('%c Service Unavailable', 'color: #f00;font-size: 17px;font-weight: bold;');
    await sleep (300000);
    checkDates (date_range, times + 1);
  }
} 

async function fetchDates (start: string, end: string) {
  const endpoint = `https://eg.almaviva-visa.services/api/sites/disabled-dates/?start=${start}&end=${end}&siteId=22&persons=1&IDtypology=3&IdCategory=1`;
  const dates = await getData<APIDates[]> (endpoint, {
    method: 'GET',
  });
  return dates;
}

async function fetchInputData () {
  try {
    const path = chrome.runtime.getURL ('input.json');
    const data = await getData<InputData> (path, {
      method: 'GET'
    });
    return data;
  } catch (err: any) {
    return err;
  }
}

function injectAlarm () {
  const alarm_path: string = chrome.runtime.getURL('alarm.mp3');
  const htmlAudio = `
    <audio hidden id='alarm'>
      <source src="${alarm_path}" type="audio/mpeg">
    </audio>
  `;
  document.body.insertAdjacentHTML('afterbegin', htmlAudio);
}

async function runAlarm () {
  const audio: (HTMLAudioElement | null) = document.querySelector('audio#alarm');
  if (audio) {
    audio.setAttribute ('loop', '');
    await audio.play ();
  }
}

async function stopAlarm () {
  const audio: (HTMLAudioElement | null) = document.querySelector('audio#alarm');
  if (audio) {
    await audio.pause ();
    audio.currentTime = 0;
  }
}

function pauseAlarmListener () {
  chrome.runtime.onMessage.addListener(function(request: MessageRequest, sender, sendResponse) {
    const { source, command } = request;
    if (source === "popup" && command === "pause-alarm") {
      stopAlarm ();
      sendResponse({ source, command, response: { success: true } });
    }
  });
}
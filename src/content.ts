import { getData } from './utils/http';
import { getDateRange } from './utils/date';
import { sleep } from './utils/methods';

Script ();

async function Script () {
  await checkDates (1);
}

async function checkDates (times: number) {
  console.log (`%c [${times}] Script is running on: ${new Date ().toLocaleString()}`, 'font-weight: bold;');
  try {
    const fullDateRange: string[] =  getDateRange ('01/3/2023', '31/3/2023');
    const targetRange: string[] = (await fetchDates ('01/3/2023', '31/3/2023')).map ((d: { date: string, isHoliday: boolean }) => d.date);
    const results = fullDateRange.filter ((d: string) => !targetRange.includes(d)); 
    console.log ('%c Service Available', 'color: #0f0;font-size: 17px;font-weight: bold;');
    console.table (results);
    return;
  } catch (err) {
    console.log ('%c Service Unavailable', 'color: #f00;font-size: 17px;font-weight: bold;');
    sleep (300000);
    checkDates (times + 1);
  }
} 

async function fetchDates (start: string, end: string) {
  const endpoint = `https://eg.almaviva-visa.services/api/sites/disabled-dates/?start=${start}&end=${end}&siteId=22&persons=1&IDtypology=3&IdCategory=1`;
  const dates = await getData (endpoint, {
    method: 'GET',
  });
  return dates;
}
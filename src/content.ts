// https://eg.almaviva-visa.services/api/sites/disabled-dates/?start=01/2/2023&end=31/2/2023&siteId=22&persons=1&IDtypology=3&IdCategory=1

import { getData } from './utils/http';

async function getDates (start: string, end: string) {
  const endpoint = `https://eg.almaviva-visa.services/api/sites/disabled-dates/?start=${start}&end=${end}&siteId=22&persons=1&IDtypology=3&IdCategory=1`;
  const dates = await getData (endpoint, {
    method: 'GET',
  });
  return dates;
}

async function App () {
  const target = await getDates ('01/2/2023', '31/2/2023');
  console.log (target);
}

App ();
type fetchOptions = {
  method: 'POST' | 'GET',
  body?: string
};


export async function getData (url: string, options: fetchOptions) {
  const res = await fetch(url, {
    'headers': {
      'Content-Type': 'application/json',
    "Accept": "application/json",
    },
    ...options
  });
  const data = await res.json ();
  return data;
}
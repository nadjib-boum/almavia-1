type fetchOptions = {
  method: 'POST' | 'GET',
  body?: string
};


export async function getData <T> (url: string, options: fetchOptions) : Promise<T> {
  try {
    const res = await fetch(url, {
      'headers': {
        'Content-Type': 'application/json',
      "Accept": "application/json",
      },
      ...options
    });
    if (!res.ok) throw new Error ();
    const data = await res.json ();
    return data;
  } catch (err) {
    throw err;
  }
}
type fetchOptions = {
  method: "POST" | "GET";
  body?: string;
};

export async function getData(
  url: string,
  options: fetchOptions
): Promise<any> {
  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      ...options,
    });
    if (!res.ok) return Promise.reject();
    const data = await res.json();
    return data;
  } catch (err) {
    return Promise.reject();
  }
}

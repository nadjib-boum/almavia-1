type FetchOptions = {
  format: "json" | "text";
};

interface IHTTPUtil {
  get: (url: string) => Promise<any>;
}

class HTTPUtil implements IHTTPUtil {
  async get(url: string, options?: FetchOptions): Promise<any> {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error();
      let data;
      if (options?.format === "text") {
        data = await res.text();
      } else if (options?.format === "json") {
        data = await res.json();
      } else {
        data = await res.json();
      }
      return data;
    } catch (err: any) {
      return Promise.reject(err);
    }
  }
}

const httpUtil = new HTTPUtil();

export default httpUtil;

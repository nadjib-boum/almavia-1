interface IHTTPUtil {
  get: (url: string) => Promise<any>;
}

class HTTPUtil implements IHTTPUtil {
  async get(url: string): Promise<any> {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error();
      const data = await res.json();
      return data;
    } catch (err: any) {
      return Promise.reject(err);
    }
  }
}

const httpUtil = new HTTPUtil();

export default httpUtil;

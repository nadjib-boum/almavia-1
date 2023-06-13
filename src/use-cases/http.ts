import HTTPUtil from "../utils/http";
import DOMUtil from "../utils/dom";
import { APIParams, bindAPIParams } from "../helpers/api";

export async function fetchConfig(): Promise<any> {
  try {
    const path: string = chrome.runtime.getURL("config.json");
    const data = await HTTPUtil.get(path);
    return data;
  } catch (err: any) {
    return Promise.reject(err);
  }
}

export async function fetchAPIDates(apiParams: APIParams): Promise<any> {
  try {
    const url: string = bindAPIParams(apiParams);
    const data = await HTTPUtil.get(url);
    return data;
  } catch (err: any) {
    return Promise.reject(err);
  }
}

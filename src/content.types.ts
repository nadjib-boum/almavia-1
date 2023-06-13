import type { APIParams } from "./helpers/api";

export type ButtonData = APIParams & {
  label: string;
};

export type ContentData = {
  apiButtonParams: APIParams[];
};

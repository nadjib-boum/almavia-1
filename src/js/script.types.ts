import type { APIParams } from "../helpers/api";

export type ButtonsData = Pick<
  APIParams,
  "IDtypology" | "IdCategory" | "siteId" | "persons"
> & {
  label: string;
};

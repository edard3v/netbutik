import { GetProducts } from "@api/types";
import { EdarErr } from "@errors/EdarErr";

export const getProducts = async (params: Params): Promise<GetProducts> => {
  const { url, signal, filters } = params;
  const { limit = 20 } = filters;

  const newUrl = new URL(url);

  newUrl.searchParams.set("limit", String(limit));

  const res = await fetch(newUrl, {
    signal,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new EdarErr({
      status: res.status,
    });
  }

  return await res.json();
};

type Params = {
  signal: AbortSignal;
  url: string;
  filters: ProductFilters;
};

export type ProductFilters = { limit?: number; page?: number };

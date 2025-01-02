import { EdarErr } from "@errors/EdarErr";

export const getProducts = async (params: Params) => {
  const { url, signal } = params;

  const res = await fetch(url, {
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
};

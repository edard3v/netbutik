import { API } from "@api/api";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
  const filters = { limit: 6 };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", filters],
    queryFn: (tanStack) =>
      API.getProducts({
        signal: tanStack.signal,
        filters,
      }),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { products: data, isLoading, isError };
};

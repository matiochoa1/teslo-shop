import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.action";
import { createUpdateProduct } from "../actions/create-update-products.action";
import type { Product } from "@/interfaces/product.inteface";

export const useProducts = (id: string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const mutation = useMutation({
    mutationFn: createUpdateProduct,
    onSuccess: (product: Product) => {
      queryClient.invalidateQueries({ queryKey: ["products"] }); // invalidamos cache
      queryClient.invalidateQueries({
        queryKey: ["product", { id: product.id }],
      }); // invalidamos cache
      queryClient.setQueryData(["products", { id: product.id }], product); // actualizamos queryData
    },
  });

  return {
    ...query,
    mutation,
  };
};

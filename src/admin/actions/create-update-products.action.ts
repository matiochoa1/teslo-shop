import { tesloApi } from "@/api/tesloAPI";
import type { Product } from "@/interfaces/product.inteface";
import { sleep } from "@/lib/sleep";

export const createUpdateProduct = async (
  productLike: Partial<Product>,
): Promise<Product> => {
  await sleep(1500);
  const { id, user, images = [], ...restOfData } = productLike;

  const isCreating = id === "new";
  restOfData.stock = Number(restOfData.stock || 0);
  restOfData.price = Number(restOfData.price || 0);

  const { data } = await tesloApi<Product>({
    url: isCreating ? "/products" : `/products?${id}`,
    method: isCreating ? "POST" : "PATCH",
    data: restOfData,
  });

  return {
    ...data,
    images: data.images.map((image) => {
      if (image.includes("http")) return image;
      return `${import.meta.env.VITE_API_URL}/files/product/${image}`;
    }),
  };
};

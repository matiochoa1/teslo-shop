import { Navigate, useNavigate, useParams } from "react-router";

import { useProducts } from "@/admin/hooks/useProducts";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { toast } from "sonner";
import { ProductForm } from "./ui/ProductForm";
import type { Product } from "@/interfaces/product.inteface";

export const ProductAdminPage = () => {
  const { id } = useParams();

  const { isLoading, isError, data: product, mutation } = useProducts(id || "");

  const productTitle = id === "new" ? "Nuevo producto" : "Editar producto";
  const productSubtitle =
    id === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto.";
  const navigate = useNavigate();

  const handleSubmit = async (productLike: Partial<Product>) => {
    await mutation.mutateAsync(productLike, {
      onSuccess: (data) => {
        toast.success("Producto actualizado correctamente!", {
          position: "top-right",
        });
        navigate(`/admin/products/${data.id}`);
      },
      onError: (error) => {
        console.log(error);
        toast.error("Error al actualizar el producto");
      },
    });
  };

  if (isError) {
    toast("Producto no encontrado");
    return <Navigate to="/admin/products" />;
  }

  if (isLoading) {
    return <CustomFullScreenLoading />;
  }

  if (!product) {
    return <Navigate to="/admin/products" />;
  }

  return (
    <ProductForm
      title={productTitle}
      subTitle={productSubtitle}
      product={product}
      onSubmit={handleSubmit}
      isPosting={mutation.isPending}
    />
  );
};

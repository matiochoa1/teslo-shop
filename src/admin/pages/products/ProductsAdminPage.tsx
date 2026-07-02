import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/shop/hooks/useProducts";
import { ProductsListView } from "./ProductsListView";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";

export const ProductsAdminPage = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) return <CustomFullScreenLoading />;

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle
          title="Productos"
          subtitle="Aqui puedes ver y editar tus productos"
        />

        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon />
              Nuevo Producto
            </Button>
          </Link>
        </div>
      </div>

      <ProductsListView products={data?.products || []} />

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};

import { Link } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Product } from "@/interfaces/product.inteface";
import { currencyFormatter } from "@/lib/currencyFormatter";
import { PencilIcon } from "lucide-react";

interface Props {
  products: Product[];
}

export const ProductsListView = ({ products }: Props) => {
  return (
    <>
      <Table className="bg-white p-10 shadow-xs border-gray-200 mb-10 rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>

        {products.map((product) => (
          <TableBody>
            <TableRow>
              <TableCell>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell>
                <Link
                  to={`/admin/products/${product.id}`}
                  className="hover:text-blue-500 cursor-pointer underline"
                >
                  {product.title}
                </Link>
              </TableCell>
              <TableCell>{currencyFormatter(product.price)}</TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.sizes.join(", ")}</TableCell>
              <TableCell>
                <Link
                  to={`/admin/products/${product.id}`}
                  className="flex justify-center"
                >
                  <PencilIcon className="w-4 h-4 text-blue-500 hover:text-blue-300 cursor-pointer" />
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </>
  );
};

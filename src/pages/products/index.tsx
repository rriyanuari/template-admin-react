import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <main className="container flex flex-1 flex-col gap-4">
      <div className="flex items-center">
        <h1 className="text-3xl font-semibold">Inventory</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a product.
          </p>
          <Link to="create">
            <Button className="mt-4">Add Product</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Products;

import { useState } from "react";
import { Product, ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export type FilterableProductTableProps = {
  products: Product[];
};

export function FilterableProductTable({
  products,
}: FilterableProductTableProps) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
}

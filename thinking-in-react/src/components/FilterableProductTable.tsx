import {memo, useState} from "react";
import { Product, ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export type FilterableProductTableProps = {
  products: Product[];
};

const Lox = memo(function Lox(props: {inStockOnly: boolean}) {
    console.log('lox rendered')
    return <span>Lox {props.inStockOnly.toString()}</span>
})

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
        <Lox inStockOnly={inStockOnly}/>
    </>
  );
}

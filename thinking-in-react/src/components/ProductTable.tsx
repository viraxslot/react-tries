export type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

export type ProductTableProps = {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
};

export function ProductTable({
  products,
  filterText,
  inStockOnly,
}: ProductTableProps) {
  const rows: JSX.Element[] = [];

  let currentCategory: string | null = null;
  let sectionId = 0;
  products.forEach((product, idx) => {
    if (
      filterText &&
      !product.name.toLowerCase().includes(filterText.toLowerCase())
    ) {
      return;
    }

    if (!currentCategory || product.category !== currentCategory) {
      currentCategory = product.category;
      rows.push(
        <tr key={`${idx}-${sectionId}`}>
          <th colSpan={2}>{product.category}</th>
        </tr>
      );
      sectionId++;
    }

    let name = null;
    if (product.stocked) {
      name = product.name;
    } else {
      if (inStockOnly) {
        return;
      }
      name = <span style={{ color: "red" }}>{product.name}</span>;
    }

    rows.push(
      <tr key={idx}>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

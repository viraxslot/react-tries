type SearchBarProps = {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: Function;
  onInStockOnlyChange: Function;
};

export function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: SearchBarProps) {
  return (
    <form>
      <input
        type="text"
        id="search-input"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        id="show-in-stock"
        checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.checked)}
      ></input>
      <label htmlFor="show-in-stock">Only show products in stock</label>
    </form>
  );
}

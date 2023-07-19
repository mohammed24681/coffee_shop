import { useSelector } from "react-redux";
import ShowProduct from "../products/ShowProduct";

function ProductsFromSearch({ elementRef }) {
  const searchProducts = useSelector(
    (state) => state.products.productsFromSearch
  );

  return (
    <div
      ref={elementRef}
      className={`bg-white border-x border-main h-0 max-h-[calc(100vh-118px)] origin-top overflow-y-auto ${
        searchProducts.length > 0 && "show-search-products py-5 border-b"
      } px-28 mx-auto text-black products-section grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 transition`}
    >
      {searchProducts.map((prod) => (
        <ShowProduct
          key={prod.id}
          title={prod.title}
          price={prod.price}
          quantity={prod.quantity}
          id={prod.id}
        />
      ))}
    </div>
  );
}

export default ProductsFromSearch;

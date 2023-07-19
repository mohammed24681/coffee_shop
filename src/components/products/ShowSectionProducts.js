import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useRef, useState } from "react";
import ShowProduct from "./ShowProduct";
import { fetchAllProducts } from "@/rtk/slices/productsSlice";

function ShowSectionProducts() {
  const products = useSelector((state) => state.products.products);
  const productsLegnth = products.length;

  const [maxProducts, setMaxProducts] = useState(0);
  const productsRef = useRef(null);

  const [availableProducts, setAvailableProducts] = useState([]);

  useEffect(() => {
    setAvailableProducts(
      <div
        ref={productsRef}
        className={`products-section grid-cols-[repeat(auto-fit,minmax(290px,auto))] ${
          productsLegnth < maxProducts &&
          `md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,290px)]`
        }`}
      >
        {productsLegnth > 0 ? (
          products.map((product) => {
            return (
              <ShowProduct
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
              />
            );
          })
        ) : (
          <p className="text-center text-main font-medium text-lg capitalize -mt-4">
            sorry, there is no products at the current time!
          </p>
        )}
      </div>
    );
  }, []);

  useEffect(() => {
    const prdocutsSectionWidth = productsRef.current?.clientWidth;
    const availableWidth = prdocutsSectionWidth - 28 * 3;
    setMaxProducts(Math.round(availableWidth / 290));
  }, [productsLegnth]);

  return <div>{availableProducts}</div>;
}
export default ShowSectionProducts;

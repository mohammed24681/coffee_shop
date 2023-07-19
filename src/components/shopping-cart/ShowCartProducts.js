import { useEffect, useState } from "react";

import ShowCartProduct from "./ShowCartProduct";
import { fetchAllProducts } from "@/rtk/slices/productsSlice";
import { useDispatch } from "react-redux";

import { getStaticProps } from "@/pages/index";

function ShowCartProducts() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const showCart = () => {
      if (JSON.parse(localStorage.getItem("cart-products"))) {
        setProducts(JSON.parse(localStorage.getItem("cart-products")));
      }
    };
    showCart();
    window.addEventListener("storage", showCart);
  }, []);

  return (
    <tbody>
      {products.map((product) => {
        return (
          <ShowCartProduct
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            count={product.count}
          />
        );
      })}
    </tbody>
  );
}

export default ShowCartProducts;

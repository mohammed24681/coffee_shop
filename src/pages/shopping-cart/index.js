import { useEffect } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Head from "next/head";
import CartProducts from "@/components/shopping-cart/CartProducts";
import PurchaseProceed from "@/components/shopping-cart/PurchaseProceed";
import { setCopones } from "@/rtk/slices/coponesSlice";
import { wrapper } from "@/rtk/store";
import { setProducts } from "@/rtk/slices/productsSlice";
import fetchCopones from "@/data_fetching/fetchCopones";
import fetchProducts from "@/data_fetching/fetchProducts";

function ShoppingCart(props) {
  useEffect(() => {
    props.navBarRef.current.classList.add("dark-nav");
  });
  return (
    <section className="container pt-nav-length pb-4">
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <h2 className="section-heading py-10">
        <AiOutlineShoppingCart />
        shopping cart
      </h2>
      <CartProducts />
      <PurchaseProceed />
    </section>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const copones = await fetchCopones();
  store.dispatch(setCopones(copones));
  const products = await fetchProducts();
  store.dispatch(setProducts(products));
});

export default ShoppingCart;

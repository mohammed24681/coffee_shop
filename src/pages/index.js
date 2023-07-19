import Head from "next/head";
import Header from "@/components/header";
import History from "@/components/history";
import Products from "@/components/products";
import Customers from "@/components/customers";
import Footer from "@/components/layout/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { wrapper } from "@/rtk/store";
import { setProducts } from "@/rtk/slices/productsSlice";
import fetchProducts from "@/data_fetching/fetchProducts";

export default function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Coffee Shop</title>
        <meta name="description" content="enjoy delicios coffee with us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <History />
        <Products />
        <Customers />
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const products = await fetchProducts();
  store.dispatch(setProducts(products));
});

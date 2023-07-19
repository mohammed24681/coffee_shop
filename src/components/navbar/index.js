import Image from "next/image";
import LogoImg from "/public/assests/logo.png";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  clearSearchProducts,
  searchProducts,
} from "@/rtk/slices/productsSlice";
import ProductsFromSearch from "./ProductsFromSearch";
import { useRouter } from "next/router";

function NavBar(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const navLinksRef = useRef(null);
  const searchInputRef = useRef(null);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [cartProductsCount, setCartProductsCount] = useState(0);
  const layerRef = useRef(null);

  const hanldeSearchIcon = () => {
    navLinksRef?.current?.classList.remove("show-nav-links");
    searchInputRef?.current?.classList.toggle("show-search-input");
    searchInputRef.current.children[0].focus();
    layerRef?.current?.classList.toggle("show-layer");
  };
  const handleBarsIcon = () => {
    searchInputRef?.current?.classList.remove("show-search-input");
    navLinksRef?.current?.classList.toggle("show-nav-links");
    layerRef?.current?.classList.toggle("show-layer");
  };
  const handleLayer = () => {
    resetPopups();
  };

  const resetPopups = () => {
    navLinksRef?.current?.classList.remove("show-nav-links");
    searchInputRef?.current?.classList.remove("show-search-input");
    setSearchInputValue("");
    dispatch(clearSearchProducts());
    layerRef?.current?.classList.remove("show-layer");
  };

  useEffect(() => {
    resetPopups();
  }, [router.asPath]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (searchInputRef?.current?.classList.contains("show-search-input")) {
        resetPopups();
      }

      if (window.location.pathname.split("/").join("") === "") {
        props.navBarRef?.current?.classList.remove("dark-nav");
        if (window.scrollY >= 80) {
          props.navBarRef?.current?.classList.add("dark-nav");
        } else {
          props.navBarRef?.current?.classList.remove("dark-nav");
        }
      }
    });
  });

  useEffect(() => {
    if (window.location.pathname.split("/").join("") === "") {
      props.navBarRef?.current?.classList.remove("dark-nav");
    }
    setCartProductsCount(
      JSON.parse(localStorage.getItem("cart-products")).length
    );
    window.addEventListener("storage", () => {
      setCartProductsCount(
        JSON.parse(localStorage.getItem("cart-products")).length
      );
    });
  }, []);

  return (
    <div>
      <nav
        ref={props.navBarRef}
        className="w-full dark-nav text-text fixed top-0 right-0 z-50 transition duration-200"
      >
        <div className="container flex justify-between items-center h-navbar">
          <Link href="/" scroll={false}>
            <Image src={LogoImg} alt="Logo" className="w-[60px]" />
          </Link>
          <div onClick={handleBarsIcon} className="block md:hidden ">
            <FaBars className="text-[17px]" />
          </div>
          <ul ref={navLinksRef}>
            <li>
              <Link href="/#home" scroll={false}>
                home
              </Link>
            </li>
            <li>
              <Link href="/#about-us" scroll={false}>
                about us
              </Link>
            </li>
            <li>
              <Link href="/#products" scroll={false}>
                products
              </Link>
            </li>
            <li>
              <Link href="/#customers" scroll={false}>
                customers
              </Link>
            </li>
          </ul>
          <ul>
            <li className="relative">
              <Link href="/shopping-cart">
                <AiOutlineShoppingCart />
                <span className="absolute -top-2 -right-2 text-[11px] font-medium center-children bg-main px-1 rounded-lg">
                  {cartProductsCount}
                </span>
              </Link>
            </li>
            <li onClick={hanldeSearchIcon}>
              <AiOutlineSearch />
            </li>
          </ul>
        </div>
        <div
          ref={searchInputRef}
          className="container h-0 scale-y-0 origin-top overflow-hidden absolute top-navbar left-1/2 z-20 -translate-x-1/2 transition-all"
        >
          <input
            type="text"
            placeholder="search for a coffee"
            className="w-full p-3 bg-secondary rounded-sm"
            value={searchInputValue}
            onChange={(e) => {
              setSearchInputValue(e.currentTarget.value);
              dispatch(searchProducts(e.currentTarget.value));
            }}
          />
          <ProductsFromSearch />
        </div>
      </nav>
      <div
        ref={layerRef}
        onClick={handleLayer}
        className="w-screen h-screen hidden fixed top-0 left-0 bg-transparent z-40"
      ></div>
    </div>
  );
}

export default NavBar;

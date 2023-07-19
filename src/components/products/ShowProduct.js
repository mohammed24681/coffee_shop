import Image from "next/image";
import testProdImg from "/public/assests/p1.png";

import Toast from "@/alerts/Toast";

function ShowProduct({ id, title, price, quantity }) {
  const addToCart = (prod) => {
    const product = JSON.parse(localStorage.getItem("cart-products"))?.find(
      (p) => p.id == prod.id
    );
    if (JSON.parse(localStorage.getItem("cart-products"))) {
      const cart = JSON.parse(localStorage.getItem("cart-products"));
      if (product) {
        if (product.count < product.quantity) {
          const foundedProduct = cart.find((p) => p.id == prod.id);
          foundedProduct.count++;
          const foundedProductIndex = cart.findIndex(
            (p) => p.id == foundedProduct.id
          );
          cart.splice(foundedProductIndex, 1, foundedProduct);
          localStorage.setItem("cart-products", JSON.stringify(cart));
          Toast.fire({
            icon: "success",
            title: "Product added to cart",
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "There isn't enough quantity",
          });
        }
      } else {
        prod.count = 1;
        localStorage.setItem("cart-products", JSON.stringify([...cart, prod]));
        Toast.fire({
          icon: "success",
          title: "Product added to cart",
        });
      }
    } else {
      prod.count = 1;
      localStorage.setItem("cart-products", JSON.stringify([prod]));
      Toast.fire({
        icon: "success",
        title: "Product added to cart",
      });
    }
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div>
      <div>
        <Image src={testProdImg} alt="product" />
      </div>
      <h3>{title}</h3>
      <div>
        <p>${price}</p>
        <button
          onClick={() => {
            addToCart({
              id,
              title,
              price,
              quantity,
            });
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ShowProduct;

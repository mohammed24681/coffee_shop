import Image from "next/image";
import testProdImg from "/public/assests/p1.png";

import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import Toast from "@/alerts/Toast";

function ShowCartProduct({ id, title, price, quantity, count }) {
  const [prodCount, setProdCount] = useState(count);

  useEffect(() => {
    setProdCount(count);
  }, [count]);

  const deleteProdFromCart = (prodId) => {
    const cart = JSON.parse(localStorage.getItem("cart-products"));
    const prodIndex = cart.findIndex((p) => p.id == prodId);
    cart.splice(prodIndex, 1);
    localStorage.setItem("cart-products", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    Toast.fire({
      icon: "success",
      title: "product removed from cart",
    });
  };

  const updateProdCount = (prodCount) => {
    const cart = JSON.parse(localStorage.getItem("cart-products"));
    const prodIndex = cart.findIndex((p) => p.id == id);
    cart[prodIndex].count = +prodCount;
    localStorage.setItem("cart-products", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <tr>
      <td>
        <Image src={testProdImg} alt="product" />
        {title}
      </td>
      <td>
        <span className="text-main">$</span>
        {price}
      </td>
      <td>
        <input
          type="number"
          id="prod-count"
          min={1}
          max={quantity}
          value={prodCount}
          onChange={(e) => {
            setProdCount(e.currentTarget.value);
            updateProdCount(e.currentTarget.value);
          }}
        />
      </td>
      <td>
        <span className="text-main">$</span>
        {prodCount * price}
      </td>
      <td>
        <AiFillCloseCircle
          onClick={() => {
            deleteProdFromCart(id);
          }}
        />
      </td>
    </tr>
  );
}

export default ShowCartProduct;

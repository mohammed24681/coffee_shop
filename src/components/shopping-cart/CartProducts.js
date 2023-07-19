import { useEffect } from "react";
import ShowCartProducts from "./ShowCartProducts";

function CartProducts() {
  return (
    <div className="overflow-x-auto">
      <table className="shopping-cart-table">
        <thead>
          <tr>
            <th>product</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <ShowCartProducts />
      </table>
    </div>
  );
}

export default CartProducts;

import {
  fetchAllCopones,
  removeCurrentCopone,
  searchCopone,
  usedCurrentCopone,
} from "@/rtk/slices/coponesSlice";
import { wrapper } from "@/rtk/store";
import { useEffect, useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function PurchaseProceed() {
  const dispatch = useDispatch();

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(subTotal);
  const [coponeCode, setCoponeCode] = useState("");

  const copone = useSelector((state) => state.copones.currentCopone);

  useEffect(() => {
    setTotal(subTotal);
  }, [subTotal]);

  useEffect(() => {
    const getSubTobtal = () => {
      const cart = JSON.parse(localStorage.getItem("cart-products"));
      if (cart?.length > 0) {
        const totalPrice =
          cart.length === 1
            ? cart[0].price * cart[0].count
            : cart.reduce((acc, cur, index, arr) => {
                return arr.length == 1
                  ? acc.price
                  : (index === 1 ? acc.price * acc.count : acc) +
                      cur.price * cur.count;
              });
        setSubTotal(totalPrice);
      } else {
        setSubTotal(0);
      }
    };
    getSubTobtal();
    window.addEventListener("storage", getSubTobtal);
  }, []);

  const updateTotalAndSubTotal = () => {
    if (Object.keys(copone)?.length > 0) {
      if (copone["discount-type"] == "persentage") {
        setTotal(subTotal - subTotal * (copone["discount-value"] / 100));
      } else {
        setTotal(subTotal - copone["discount-value"]);
      }
    } else {
      setTotal(subTotal);
    }
  };

  useEffect(() => {
    updateTotalAndSubTotal();
  }, [copone]);

  const handleCopone = (e) => {
    e.preventDefault();
    dispatch(searchCopone(coponeCode));
    updateTotalAndSubTotal();
    setCoponeCode("");
  };

  const handleProceed = () => {
    localStorage.setItem("cart-products", JSON.stringify([]));
    window.dispatchEvent(new Event("storage"));
    if (copone) {
      dispatch(usedCurrentCopone(copone.id));
    }
    Swal.fire({
      icon: "success",
      title: "Proceed Payment",
      text: "Your Payment Is Proceeded Successfully",
      confirmButtonColor: "#bc9667",
    });
  };

  return (
    <div className="mt-5 md:flex justify-between">
      <div className="w-full md:w-[47%] mb-6 md:mb-0">
        <h3 className="purchase-heading">
          <TbDiscount2 />
          promosion code
        </h3>
        <form onSubmit={handleCopone}>
          <div className="flex h-10">
            <input
              type="text"
              placeholder="copone code"
              className="flex-grow lg:flex-grow-0 w-[50%] max-w-full px-3 border-2 border-main/60 border-r-0"
              value={coponeCode}
              onChange={(e) => {
                setCoponeCode(e.currentTarget.value);
              }}
            />
            <input
              type="submit"
              className="btn btn-sm border-2 rounded-none hover:border-main/60 hover:border-2"
            />
          </div>
        </form>
      </div>
      <div className="md:w-[40%]">
        <h3 className="purchase-heading">
          <RiMoneyDollarCircleLine /> cart totals
        </h3>
        <div className="purchase-data">
          <div>
            <h4>subtotal</h4>
            <p>
              <span>$</span>
              {subTotal}
            </p>
          </div>
          <div>
            <h4>total</h4>
            <p>
              <span>$</span>
              {total}
            </p>
          </div>
          <button className="btn btn-md mt-2" onClick={handleProceed}>
            proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default PurchaseProceed;

import Image from "next/image";
import customer1 from "/public/assests/rev1.jpg";
import { BsStar, BsStarHalf, BsFillStarFill } from "react-icons/bs";

function Customer({ rate, info, name }) {
  const stars = (rate) => {
    const listItems = [];
    for (let i = 0; i < Math.floor(rate); i++) {
      listItems.push(1);
    }
    if (Math.round(rate) === Math.ceil(rate) && Math.ceil(rate) !== +rate) {
      listItems.push(0.5);
    }
    for (let i = 0; i < 5 - Math.floor(rate); i++) {
      listItems.push(0);
    }
    listItems.length = 5;
    return listItems;
  };
  return (
    <div>
      <ul>
        {stars(rate).map((star) => (
          <li key={Math.random()}>
            {star === 1 ? (
              <BsFillStarFill />
            ) : star === 0.5 ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </li>
        ))}
      </ul>
      <p>{info}</p>
      <h3>{name}</h3>
      <Image src={customer1} alt="first_customer" />
    </div>
  );
}

export default Customer;

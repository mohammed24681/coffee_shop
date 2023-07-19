import { FaUsers } from "react-icons/fa";
import Customer from "./Customer";

function Customers() {
  return (
    <section id="customers" className="container pt-section">
      <h2
        className="section-heading"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <FaUsers />
        our customers
      </h2>
      <div className="customers-comments">
        <Customer
          rate="4.5"
          info="lorem ipsum dolor sit amet consectetur adipisching elit. temara tempore
        adit officia labore cumeque."
          name="yasen arafat"
        />
        <Customer
          rate="4.5"
          info="lorem ipsum dolor sit amet consectetur adipisching elit. temara tempore
        adit officia labore cumeque."
          name="yasen arafat"
        />
        <Customer
          rate="4.5"
          info="lorem ipsum dolor sit amet consectetur adipisching elit. temara tempore
        adit officia labore cumeque."
          name="yasen arafat"
        />
      </div>
    </section>
  );
}

export default Customers;

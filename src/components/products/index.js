import { AiOutlineCoffee } from "react-icons/ai";
import ShowSectionProducts from "./ShowSectionProducts";
import { FaCoffee } from "react-icons/fa";

function Products() {
  return (
    <div id="products" className="container pt-section -mb-8">
      <h2
        className="section-heading"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <FaCoffee />
        our popular products
      </h2>
      <ShowSectionProducts />
    </div>
  );
}

export default Products;

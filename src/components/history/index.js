import Image from "next/image";
import beansImg from "/public/assests/about.jpg";

import { BiMessageDetail } from "react-icons/bi";

function History() {
  return (
    <section
      id="about-us"
      className="history container -my-8 pt-section md:w-3/4 lg:w-full flex flex-col lg:flex-row items-center justify-between capitalize"
    >
      <Image
        src={beansImg}
        alt="beans"
        className="w-full lg:w-[47%] rounded-lg"
        data-aos="fade-right"
        data-aos-duration="800"
      />
      <div
        className="w-full lg:w-1/2 text-center lg:text-start mt-10 lg:mt-0"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <h2 className="section-heading justify-start py-2">
          <BiMessageDetail />
          our history
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisching elit. delecuts
          facities alias pariaturn assmuenda iaao animi nostrum dolorum
          provident outem exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisching elit. delecuts
          facities alias pariaturn assmuenda iaao animi nostrum dolorum
          provident outem exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisching elit. temara
          tempore adit officia labore cumeque?
        </p>
        <a href="/learn-more" className="btn btn-lg">
          learn more
        </a>
      </div>
    </section>
  );
}

export default History;

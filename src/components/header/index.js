import Image from "next/image";
import cupImg from "/public/assests/main.png";
import { useEffect, useRef } from "react";

function Header() {
  const cupImgRef = useRef(null);
  useEffect(() => {
    cupImgRef.current.classList.add("show-cup-img");
  }, []);
  return (
    <header
      id="home"
      className="bg-[url('../images/bg.png')] bg-cover xl:bg-contain min-h-screen md:h-screen overflow-hidden"
    >
      <div className="container pt-24 md:pt-navbar pb-4 md:pb-0 flex text-center md:text-start flex-col md:flex-row items-center justify-center">
        <div
          className="w-[80%] md:w-[45%] xl:w-[40%]"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2 className="uppercase text-main text-3xl md:text-4xl lg:text-[40px] xl:text-[55px] font-bold tracking-[1px] !leading-[1.3]">
            start your day with coffee
          </h2>
          <p className="text-text text-sm md:text-base capitalize mt-5 mb-4">
            enjoy our coffee with delicious tastes , fast preparing and properly
            prices. try it now and you never regret !
          </p>
          <a href="#products" className="btn btn-lg">
            shop now
          </a>
        </div>
        <div
          className="w-[60%] md:w-[70%] lg:w-[50%] xl:w-[45%]"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <Image
            src={cupImg}
            alt="cup"
            ref={cupImgRef}
            className="w-full opacity-0 transition"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

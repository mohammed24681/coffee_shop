import Image from "next/image";
import logoImg from "/public/assests/logo.png";

function Footer() {
  return (
    <footer className="bg-[url('../images/footer-bg.jpg')] bg-cover bg-no-repeat pt-10 mt-20 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/30 after:z-0">
      <div className="container text-center flex flex-col items-center relative z-10">
        <Image src={logoImg} alt="logo" className="w-[80px] mx-auto" />
        <form className="py-16 mx-auto">
          <div className="text-white flex">
            <input
              type="text"
              placeholder="write a feedback"
              className="px-3 py-2 border-none w-80"
            />
            <button className="btn btn-lg rounded-none">send</button>
          </div>
        </form>
        <hr className="bg-white w-full " />
        <p className="py-8 capitalize font-medium text-white text-lg tracking-[0.7px]">
          all programming rights are reserved{" "}
          <span className="text-main font-bold">
            @{new Date().getFullYear()}
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import { useState } from "react";
import Logo from "../../images/logo/logo.png";
import NavList from "../Nav/NavList";
import { Link } from "react-router-dom";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  // logo
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full z-50 ${sticky ? "shadow-xl !bg-black" : ""
          }`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo_img"
            onClick={goTop}
            className="w-auto h-40"
          />
        </Link>
        <div className="navlist-nav">
          <NavList />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            {/* account */}
            <Link onClick={goTop} to="/signup" title="signup_button">
              <i className="fa-regular fa-user  text-white text-4xl cursor-pointer hover:text-[#007FFF] ease-in duration-200"></i>
            </Link>
          </div>
          {/* spin box */}
          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md min620:hidden">
            <Link
              onClick={goTop}
              to={"/classes"}
              className="flex items-center "
            >
              <i
                className={`fa-solid fa-plus bg-[#007FFF] text-white text-2xl py-3 px-4 rounded-md`}
              ></i>
              <h3 className="text-white text-[14px] ml-4 mr-8 tracking-wider">
                JOIN CLASS NOW
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

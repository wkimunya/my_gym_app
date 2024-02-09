import { Link } from "react-router-dom";

function NavList() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#007FFF]"
        >
          <a href="/">Home</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#007FFF]"
        >
          <Link onClick={goTop} to={"/about"}>
            About
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#007FFF]"
        >
          <Link onClick={goTop} to={"/gallery/page-1"}>
            Gallery
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#007FFF]"
        >
          <Link onClick={goTop} to={"/workout"}>
           My workouts
          </Link>
        </li>
        
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#007FFF]"
        >
          <Link onClick={goTop} to={"/pricing"}>
            Pricing
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#007FFF]"
        >
          <Link onClick={goTop} to={"/classes"}>
            Classes
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#007FFF]"
        >
          <Link onClick={goTop} to={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
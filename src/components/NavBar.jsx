import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
useState;

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-black">
      {/* Computer Menu List */}
      <div className="max-w-[1240px] mx-auto px-4 justify-between flex items-center h-full">
        <div>
          <h1 className="text-[var(--primary-blue)]">DEFI</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <li>Platform</li>
            <li>Developer</li>
            <li>Community</li>
            <li>About</li>
            <button className="text-white ml-4">Use Defi</button>
          </ul>
        </div>

        {/* HamBurger icon */}
        <div className="block md:hidden" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu Lists */}
        <div
          className={`${
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 text-center flex justify-center"
              : " w-full bg-black text-white absolute top-[90px] left-[-100%] text-center flex justify-center"
          }`}
        >
          <ul>
            <li className="text-xl">Platform</li>
            <li className="text-xl">Developer</li>
            <li className="text-xl">Community</li>
            <li className="text-xl">About</li>
            <button className="m-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

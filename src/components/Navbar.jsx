import { navItems } from "../constants";
import { useState } from "react";
import Menu from "./Menu";
import Close from "./Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="bg-white/5 backdrop-blur-[80px] hidden sm:flex items-center w-1/2 sm:w-5/6 justify-end sm:pr-10 lg:pr-16 lg:w-1/2">
        <ul className="flex gap-12">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="uppercase font-barlow transition-all duration-300 text-white hover:underline hover:underline-offset-[2.4rem] hover:decoration-[3px] hover:decoration-white/50 active:decoration-white focus:decoration-white active:decoration-[3px] focus:decoration-[3px]"
            >
              <a href={item.link}>
                <span className="font-bold">{item.number}</span>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        onClick={handleMenu}
        className="flex items-center sm:hidden"
      >
        {open === true ? <Close /> : <Menu />}
      </button>
      {/* mobile menu note i think i need another component for this or i need to add positioning */}
      {open ? (
        <nav className="sm:hidden absolute top-0 right-0 pl-8 bg-white/5 backdrop-blur-[80px] w-2/3 min-h-screen">
          <div className="flex flex-col">
            <button
              type="button"
              onClick={handleMenu}
              className="ml-auto pr-6 pt-8 mb-20 sm:hidden"
            >
              {open === true ? <Close /> : <Menu />}
            </button>
            <ul className="flex flex-col gap-8">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="uppercase font-barlow transition-all duration-300 text-white hover:border-r-[3px] hover:border-white/50 active:border-white focus:border-white active:border-r-[3px] focus:border-r-[3px]"
                >
                  <a href={item.link}>
                    <span className="font-bold">{item.number}</span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Navbar;

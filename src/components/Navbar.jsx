import { navItems } from "../constants";
import { hamburgerImg } from "../utils";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white/5 backdrop-blur-[80px] hidden sm:flex items-center w-1/2 sm:w-5/6 justify-end sm:pr-10 lg:pr-16 lg:w-1/2">
        <ul className="flex gap-12">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="uppercase font-barlow text-white hover:underline hover:underline-offset-[2.4rem] hover:decoration-[3px] hover:decoration-white/50 active:decoration-white focus:decoration-white"
            >
              <a href="#">
                <span className="font-bold">{item.number}</span>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="sm:hidden block">
        <img src={hamburgerImg} alt="menu" />
      </button>
    </>
  );
};

export default Navbar;

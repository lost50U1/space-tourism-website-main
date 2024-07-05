import { navItems } from "../constants";

const Navbar = () => {
  return (
    <nav className="bg-white hidden md:flex items-center">
      <ul className="flex">
        {navItems.map((item) => (
          <li key={item} className="uppercase">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

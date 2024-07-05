import { logoImg } from "../utils";

const Logo = () => {
  return (
    <div className="sm:pl-10 w-1/2 sm:w-1/6 sm:h-24 flex items-center lg:w-1/2">
      <a href="#">
        <img className="w-10 md:w-12 h-auto" src={logoImg} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;

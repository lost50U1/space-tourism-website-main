import { logoImg } from "../utils";

const Logo = () => {
  return (
    <div>
      <img className="w-10 md:w-12 h-auto" src={logoImg} alt="logo" />
    </div>
  );
};

export default Logo;

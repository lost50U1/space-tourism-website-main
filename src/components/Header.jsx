import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <section className="lg:pt-10">
        <header className="mx-auto p-6 sm:p-0 sm:h-24 flex justify-between">
          <Logo />
          <Navbar />
        </header>
      </section>
    </>
  );
};

export default Header;

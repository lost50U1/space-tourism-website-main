import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <section className="lg:pt-10">
        <header className="container mx-auto p-6 flex">
          <Logo />
          <Navbar />
        </header>
      </section>
    </>
  );
};

export default Header;

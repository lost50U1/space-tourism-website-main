import Header from "./components/Header";

const App = () => {
  return (
    <>
      <main className="bg-cover text-base min-h-screen bg-[url('./assets/home/background-home-mobile.jpg')] sm:bg-[url('./assets/home/background-home-tablet.jpg')] lg:bg-[url('./assets/home/background-home-desktop.jpg')]">
        <Header />
        00 Home 01 Destination 02 Crew 03 Technology So, you want to travel to
        Space Let’s face it; if you want to go to space, you might as well
        genuinely go to outer space and not hover kind of on the edge of it.
        Well sit back, and relax because we’ll give you a truly out of this
        world experience! Explore
      </main>
    </>
  );
};

export default App;

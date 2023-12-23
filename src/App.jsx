import Navbar from "./Navbar";
import Banner from "./Banner";
import Body from "./Body";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main className="mx-24 my-20">
        <Body />
      </main>
    </>
  );
}

export default App;

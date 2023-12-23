import Navbar from "./Navbar";
import Banner from "./Banner";
import Filter from "./Filter";
// import './App.css'

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main className="mx-24 my-20">
        <Filter />
      </main>
    </>
  );
}

export default App;

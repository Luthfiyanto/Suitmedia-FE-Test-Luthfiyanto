import Navbar from "./Navbar";
import Banner from "./Banner";
import Filter from "./Filter";
import ListPost from "./ListPost";
import Pagination from "./Pagination";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main className="mx-24 my-20">
        <Filter />
        <ListPost />
        <Pagination />
      </main>
    </>
  );
}

export default App;

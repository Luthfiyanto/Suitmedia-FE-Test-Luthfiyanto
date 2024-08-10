import Filter from "./Filter";
import ListPost from "./ListPost";
import Pagination from "./Pagination";
import Loading from "./components/Loading";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "./context/FilterContext";

export default function Body() {
  const [postAvailable, setPostAvailable] = useState(false);
  const { page, sort, url, showPerPage, fetchData } = useContext(FilterContext);
  useEffect(() => {
    try {
      fetchData();
      setPostAvailable(true);
    } catch (error) {
      setPostAvailable(false);
    }
  }, [page, sort, url, showPerPage]);
  return (
    <>
      <Filter />
      {!postAvailable && <Loading />}
      {postAvailable && <ListPost />}
      <Pagination />
    </>
  );
}

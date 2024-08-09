import Filter from "./Filter";
import ListPost from "./ListPost";
import Pagination from "./Pagination";
import { useContext, useEffect } from "react";
import { FilterContext } from "./context/FilterContext";

export default function Body() {
  const { sort, url, showPerPage, fetchData } = useContext(FilterContext);

  useEffect(() => {
    fetchData();
    // }, []);
  }, [sort, url, showPerPage]);
  return (
    <>
      <Filter />
      <ListPost />
      <Pagination />
    </>
  );
}

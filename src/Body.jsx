import Filter from "./Filter";
import ListPost from "./ListPost";
import Pagination from "./Pagination";
import { useContext, useEffect } from "react";
import { FilterContext } from "./context/FilterContext";

export default function Body() {
  const { page, sort, url, showPerPage, fetchData } = useContext(FilterContext);
  useEffect(() => {
    fetchData();
  }, [page, sort, url, showPerPage]);
  return (
    <>
      <Filter />
      <ListPost />
      <Pagination />
    </>
  );
}

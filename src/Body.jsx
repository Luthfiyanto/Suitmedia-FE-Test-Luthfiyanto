import Filter from "./Filter";
import ListPost from "./ListPost";
import Pagination from "./Pagination";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "./context/FilterContext";

export default function Body() {
  const [showPerPage, setShowPerPage] = useState(10);
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState("1");
  const [isFilter, setIsFilter] = useState(false);
  const [url, setUrl] = useState("");
  const { submitButton, submitPagination } = useContext(FilterContext);

  const onSubmit = () => {
    const payload = { page, showPerPage, sort };
    setIsFilter(true);
    submitButton(payload);
  };

  const onSubmitPagination = () => {
    const payload = { url };
    setIsFilter(true);
    submitPagination(payload);
  };

  useEffect(() => {
    if (!isFilter) {
      const payload = { page: 1, showPerPage: 10, sort: "Newest" };
      setIsFilter(false);
      submitButton(payload);
    }
  }, []);
  return (
    <>
      <Filter setShowPerPage={setShowPerPage} setSort={setSort} submitHandle={onSubmit} />
      <ListPost />
      <Pagination />
    </>
  );
}

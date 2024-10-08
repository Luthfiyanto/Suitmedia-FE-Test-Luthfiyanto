import { useContext } from "react";
import { FilterContext } from "./context/FilterContext";

export default function Filter() {
  const { meta, setShowPerPage, setSort } = useContext(FilterContext);
  return (
    <section className="font-medium text-sm text-myGrey-600 flex justify-between">
      <p>
        Showing {meta.from} - {meta.to} from {meta.total}
      </p>
      <div className="flex gap-2">
        <label htmlFor="">Show per page:</label>
        <select
          name=""
          id=""
          onChange={(e) => {
            setShowPerPage(e.target.value);
          }}
          className="dropdown"
        >
          {[10, 20, 50].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label htmlFor="">Sort by</label>
        <select
          name=""
          id=""
          onChange={(e) => {
            setSort(e.target.value);
          }}
          className="dropdown"
        >
          {["Newest", "Oldest"].map((sort) => (
            <option key={sort} value={sort}>
              {sort}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

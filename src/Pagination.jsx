import { useContext } from "react";
import { FilterContext, apiUrl } from "./context/FilterContext";

export default function Pagination() {
  const { link, meta, setUrl, sort, showPerPage } = useContext(FilterContext);
  const current_page = meta?.current_page || 1;
  const last_page = meta?.last_page || 1;

  const firstPage = current_page == 1 ? current_page : current_page == last_page ? current_page - 2 : current_page - 1;
  const secondPage = current_page == 1 ? current_page + 1 : current_page == last_page ? current_page - 1 : current_page;
  const thirdPage = current_page == 1 ? current_page + 2 : current_page == last_page ? current_page : current_page + 1;

  const sorting = sort == "Newest" ? "-published_at" : "published_at";
  async function changePage(page) {
    await setUrl(`${apiUrl}?page[number]=${page}&page[size]=${showPerPage}&append[]=small_image&append[]=medium_image&sort=${sorting}`);
  }

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => {
          setUrl(link.first);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pagiButton">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </button>
      <button
        disabled={current_page == 1}
        onClick={() => {
          setUrl(link.prev);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`pagiButton ${current_page == 1 ? "text-opacity-50 hover:border-none" : ""}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button className={`pagiButton ${firstPage == current_page ? "bg-myOrange-600 text-white" : ""}`} onClick={async () => await changePage(firstPage)}>
        {firstPage}
      </button>
      <button className={`pagiButton ${secondPage == current_page ? "bg-myOrange-600 text-white" : ""}`} onClick={async () => await changePage(secondPage)}>
        {secondPage}
      </button>
      <button className={`pagiButton ${thirdPage == current_page ? "bg-myOrange-600 text-white" : ""}`} onClick={async () => await changePage(thirdPage)}>
        {thirdPage}
      </button>
      <button
        disabled={current_page == last_page}
        onClick={() => {
          setUrl(link.next);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`pagiButton ${last_page == current_page ? "text-opacity-50 hover:border-none" : ""}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <button
        onClick={() => {
          setUrl(link.last);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pagiButton">
          <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

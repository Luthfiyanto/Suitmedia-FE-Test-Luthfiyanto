import { useContext } from "react";
import { FilterContext } from "./context/FilterContext";

export default function Pagination() {
  const { link, meta, url, setUrl, fetchData } = useContext(FilterContext);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => {
          setUrl(link.first);
          console.log(url);
          fetchData();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pagiButton">
          <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </button>
      <button
        onClick={() => {
          setUrl(link.prev);
          console.log(url);
          fetchData();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pagiButton">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button className="pagiButton"></button>
      <button className="pagiButton">2</button>
      <button className="pagiButton">3</button>
      <button
        onClick={() => {
          setUrl(link.next);
          console.log(url);
          fetchData();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pagiButton">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <button
        onClick={() => {
          setUrl(link.last);
          console.log(url);
          fetchData();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pagiButton">
          <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

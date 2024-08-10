import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext();
export const apiUrl = "https://suitmedia-backend.suitdev.com/api/ideas";

const FilterContextProvider = (props) => {
  const [post, setPost] = useState([]);
  const [link, setLink] = useState({});
  const [meta, setMeta] = useState({});

  const [showPerPage, setShowPerPage] = useState(10);
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState("1");
  const [isFilter, setIsFilter] = useState(false);
  const [url, setUrl] = useState("");

  const fetchData = async () => {
    const sorting = sort == "Newest" ? "-published_at" : "published_at";

    console.log("fetchData");

    try {
      if (url == "") {
        const res = await axios.get(`${apiUrl}?page[number]=${page}&page[size]=${showPerPage}&append[]=small_image&append[]=medium_image&sort=${sorting}`);
        console.log(res);
        const posts = res.data.data;
        const links = res.data.links;
        const metas = res.data.meta;
        setPost(posts);
        setLink(links);
        setMeta(metas);
        setPage(metas.current_page);
      } else {
        const res = await axios.get(url);
        console.log(res);
        const posts = res.data.data;
        const links = res.data.links;
        const metas = res.data.meta;
        setPost(posts);
        setLink(links);
        setMeta(metas);
        setPage(metas.current_page);
        setShowPerPage(metas.per_page);
        setUrl("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        post,
        setPost,
        link,
        setLink,
        meta,
        setMeta,
        showPerPage,
        setShowPerPage,
        sort,
        setSort,
        page,
        setPage,
        isFilter,
        setIsFilter,
        url,
        setUrl,
        fetchData,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [post, setPost] = useState([]);
  const [link, setLink] = useState({});
  const [meta, setMeta] = useState({});

  const [showPerPage, setShowPerPage] = useState(10);
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState("1");
  const [url, setUrl] = useState("");

  const fetchData = async () => {
    const sorting = sort == "Newest" ? "-published_at" : "published_at";

    try {
      if (url == "") {
        const res = await axios.get(`/api/ideas/?page[number]=${page}&page[size]=${showPerPage}&append[]=small_image&append[]=medium_image&sort=${sorting}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const posts = res.data.data;
        const links = res.data.links;
        const metas = res.data.meta;
        setPost(posts);
        setLink(links);
        setMeta(metas);
        setPage(metas.current_page);
      } else {
        const res = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
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

import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [post, setPost] = useState([]);
  const [link, setLink] = useState({});
  const [meta, setMeta] = useState({});

  const submitButton = async (payload) => {
    const { page, showPerPage, sort } = payload;
    const sorting = sort == "Newest" ? "-published_at" : "published_at";

    try {
      setPost([]);
      setLink({});
      setMeta({});

      const res = await axios.get(`https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=${showPerPage}&append[]=small_image&append[]=medium_image&sort=${sorting}`);
      const posts = res.data.data;
      const links = res.data.links;
      const metas = res.data.meta;

      setPost(posts);
      setLink(links);
      setMeta(metas);
    } catch (error) {
      console.log(error);
    }
  };

  const submitPagination = async (payload) => {
    const url = payload;
    try {
      setPost([]);
      setLink({});
      setMeta({});

      const res = await axios.get(url);
      const posts = res.data.data;
      const links = res.data.links;
      const metas = res.data.meta;

      setPost(posts);
      setLink(links);
      setMeta(metas);
    } catch (error) {
      console.log(error);
    }
  };

  return <FilterContext.Provider value={{ post, link, meta, submitButton, submitPagination }}>{props.children}</FilterContext.Provider>;
};

export default FilterContextProvider;

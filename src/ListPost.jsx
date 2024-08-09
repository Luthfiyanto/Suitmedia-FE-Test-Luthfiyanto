import { useContext } from "react";
import { FilterContext } from "./context/FilterContext";
import Card from "./components/Card";

export default function ListPost() {
  const { post } = useContext(FilterContext);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5">
      {post.map((data, index) => (
        <Card key={index} image={data.small_image} slug={data.title} date={data.published_at} />
      ))}
    </section>
  );
}

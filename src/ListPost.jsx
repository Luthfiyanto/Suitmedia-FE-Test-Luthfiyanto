import { useContext } from "react";
import { FilterContext } from "./context/FilterContext";
import Card from "./components/Card";

export default function ListPost() {
  const { post } = useContext(FilterContext);

  return (
    <section className="grid grid-cols-4 my-10 gap-5">
      {post.map((data) => (
        <Card key={data.id} image={data.image} slug={data.title} date={data.date} />
      ))}
    </section>
  );
}

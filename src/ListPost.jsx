import Card from "./components/Card";

export default function ListPost() {
  const dummyData = [
    {
      id: "1",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
    {
      id: "2",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
    {
      id: "3",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
    {
      id: "4",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
    {
      id: "5",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
    {
      id: "6",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
    {
      id: "7",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
    {
      id: "8",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
    {
      id: "9",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
    {
      id: "10",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
    {
      id: "11",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
    {
      id: "12",
      slug: "Lorem ipsum",
      date: "14 Des 2034",
      image: "/image1.jpg",
    },
  ];
  return (
    <section className="grid grid-cols-4 my-10 gap-5">
      {dummyData.map((data) => (
        <Card key={data.id} image={data.image} slug={data.slug} date={data.date} />
      ))}
    </section>
  );
}

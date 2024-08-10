import defaultImage from "/placeholder.jpg";
export default function Card({ slug, image, date }) {
  const formattedDate = new Date(date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
  const thumbnail = image ? image[0]?.url : defaultImage;
  return (
    <>
      <div className="card shadow-md rounded-md min-h-72">
        {/* <div style={{ backgroundImage: `url(${thumbnail})` }} className="w-full rounded-t-md h-1/2 bg-cover"></div> */}
        <img src={defaultImage} alt={slug} loading="lazy" className="w-full rounded-t-md h-1/2 bg-cover" />
        <div className="p-4">
          <p className="font-medium text-myGrey-200 py-1">{formattedDate}</p>
          <h3 className="card-title font-semibold text-myGrey-600">{slug}</h3>
        </div>
      </div>
    </>
  );
}

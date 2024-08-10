import defaultImage from "/placeholder.jpg";
import defaultImageI from "/placeholder1.jpg";
export default function Card({ slug, image, date }) {
  const formattedDate = new Date(date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
  // const thumbnail = image ? image[0]?.url : defaultImage;    // the original code should be like this

  const thumbnail = Math.random() < 0.5 ? defaultImage : defaultImageI; // this is just a placeholder for the image
  return (
    <>
      <div className="card shadow-md rounded-md h-72">
        <img src={thumbnail} alt={slug} loading="lazy" className="w-full rounded-t-md h-1/2 object-cover" />
        <div className="p-4">
          <p className="font-medium text-myGrey-200 py-1">{formattedDate}</p>
          <h3 className="card-title font-semibold text-myGrey-600">{slug}</h3>
        </div>
      </div>
    </>
  );
}

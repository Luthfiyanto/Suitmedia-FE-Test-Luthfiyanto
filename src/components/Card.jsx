import gambar from "../assets/img/banner.jpg";

export default function Card({ slug, image, date }) {
  return (
    <>
      <div className="card shadow-md rounded-md">
        <img src={gambar} alt={image} className="rounded-t-md" />
        <div className="p-3">
          <p className="font-medium text-myGrey-200">{date}</p>
          <h3 className="card-title font-semibold text-myGrey-600">{slug}</h3>
        </div>
      </div>
    </>
  );
}

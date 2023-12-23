import bannerImg from "./assets/img/banner1.jpeg";

export default function Banner() {
  const bannerStyle = { backgroundImage: `url(${bannerImg})`, backgroundSize: "cover", clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)" };
  return (
    <>
      <section className="w-full mt-10 h-96 flex flex-col justify-center items-center text-white bg-fixed" style={bannerStyle}>
        <h1 className="font-semibold text-6xl p-3">Ideas</h1>
        <p>Where all our great things begin</p>
      </section>
    </>
  );
}

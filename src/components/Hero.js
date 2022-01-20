import header_image from "../assets/images/desktop/image-header.jpg";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url(" + header_image + ")",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="bg-sky-400 h-96"
    >
      <div className="flex justify-center align-center">
        <h1 className="text-4xl font-bold text-white text-center">
          WE ARE CREATIVES
        </h1>
      </div>
    </div>
  );
}

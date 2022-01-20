import header_image from "../assets/images/desktop/image-header.jpg";

export default function Hero() {
  return (
    <div className="bg-sky-400">
      <div className="flex justify-center align-center">
        <h1 className="text-4xl font-bold text-white text-center">
          WE ARE CREATIVES
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <img
          className=" object-cover w-full"
          src={header_image}
          alt="header-img"
        />
      </div>
    </div>
  );
}

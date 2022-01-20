import image_transform from "../assets/images/desktop/image-transform.jpg";
import image_standout from "../assets/images/desktop/image-stand-out.jpg";
import image_graphic from "../assets/images/desktop/image-graphic-design.jpg";
import image_photography from "../assets/images/desktop/image-photography.jpg";

export default function Services() {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-full flex flex-row items-center justify-center">
          <div className="w-96">
            <h1 className="text-2xl font-bold">Transform your brand</h1>
            <p>
              We are a full-service create agency specializing in helping brands
              grow fast, Engage your clients through compelling visuals that do
              not most of the marketing for you.
            </p>
            <button className="uppercase mt-5 font-bold">learn more</button>
          </div>
        </div>
        <div className="w-full">
          <img className="w-full" src={image_transform} alt="" />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-full">
          <img className="w-full" src={image_standout} alt="" />
        </div>
        <div className="w-full flex flex-row items-center justify-center">
          <div className="w-96">
            <h1 className="text-2xl font-bold">Transform your brand</h1>
            <p>
              We are a full-service create agency specializing in helping brands
              grow fast, Engage your clients through compelling visuals that do
              not most of the marketing for you.
            </p>
            <button className="uppercase mt-5 font-bold">learn more</button>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-full">
          <img className="w-full" src={image_graphic} alt="" />
        </div>
        <div className="w-full">
          <img className="w-full" src={image_photography} alt="" />
        </div>
      </div>
    </>
  );
}

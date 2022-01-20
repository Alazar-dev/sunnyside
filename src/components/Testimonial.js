import image_emily from "../assets/images/image-emily.jpg";
import image_jennie from "../assets/images/image-jennie.jpg";
import image_thomas from "../assets/images/image-thomas.jpg";

export default function Testimonial() {
  return (
    <>
      <h1 className="text-center text-2xl text-center font-bold text-gray-500 uppercase py-10">
        client testimonials
      </h1>
      <div className="flex flex-row justify-center">
        <div className="justify-center">
          <img className="rounded-full mx-auto" src={image_emily} alt="" />
          <p className="text-center w-96 py-16 text-gray-600">
            We put our trust in Sunnyside and they delivered, making sure our
            need were met and deadlines were always hit.
          </p>
          <h1 className="capitalize text-center font-bold">emily r.</h1>
          <p className="capitalize text-gray-400 text-center">
            marketing director
          </p>
        </div>
        <div className="justify-center">
          <img className="rounded-full mx-auto" src={image_thomas} alt="" />
          <p className="text-center w-96 py-16 text-gray-600">
            Sunnyday's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <h1 className="capitalize text-center font-bold">thomas s.</h1>
          <p className="capitalize text-gray-400 text-center">
            chief operating officer
          </p>
        </div>
        <div className="justify-center">
          <img className="rounded-full mx-auto" src={image_jennie} alt="" />
          <p className="text-center w-96 py-16 text-gray-600">
            Incredible end result! Our sales increased over 400 percent when we
            worked with Sunnyside. Highly recommended!
          </p>
          <h1 className="capitalize text-center font-bold">jennie f.</h1>
          <p className="capitalize text-gray-400 text-center">business owner</p>
        </div>
      </div>
    </>
  );
}

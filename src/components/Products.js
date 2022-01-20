import image_gallery_milkbottles from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import image_gallery_orange from "../assets/images/desktop/image-gallery-orange.jpg";
import image_gallery_cone from "../assets/images/desktop/image-gallery-cone.jpg";
import image_gallery_sugarcubes from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

export default function Products() {
  return (
    <div className="flex flex-row ">
      <div className="w-full">
        <img className="w-full" src={image_gallery_milkbottles} alt="" />
      </div>
      <div className="w-full">
        <img className="w-full" src={image_gallery_orange} alt="" />
      </div>
      <div className="w-full">
        <img className="w-full" src={image_gallery_cone} alt="" />
      </div>
      <div className="w-full">
        <img className="w-full" src={image_gallery_sugarcubes} alt="" />
      </div>
    </div>
  );
}

import DesignTag from "../assets/icons/design_tag.svg";
import Figma from "../assets/icons/Figma.svg";

import EasyMarket from "../assets/icons/easymarket.png";
import EasyDemo from "../assets/images/easydemo.png";

function Card() {
  return (
    <div className="flex flex-col gap-4 w-1/3 bg-background-components p-4  rounded-2xl m-8">
      {/* Header:  */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={EasyMarket} alt="EasyMarket Logo" width={32} height={32} />
          <label className="text-xl font-bold">EasyMarket</label>
        </div>

        <img src={DesignTag} alt="Design Tag" width={32} height={32} />
      </div>

      {/* Main Content Section */}
      <div className="relative h-40 border-2 border-primary overflow-hidden rounded-xl">
        {/* Background Color (Bottom Layer) */}
        <div className="absolute inset-0 bg-stroke z-0"></div>

        {/* Image (Above Background) */}
        <img
          src={EasyDemo}
          alt="Product"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* Semi-Transparent Background (Above Image) */}
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

        {/* Description (Top Layer) */}
        <div className="absolute bottom-0 w-full h-1/2 bg-stroke flex flex-col items-center justify-center z-30 opacity-80">
          <p className="text-center text-sm font-semibold">Description</p>
        </div>
      </div>

      {/* Icon Section & Button */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img src={Figma} alt="Figma" width={48} height={48} />
        </div>
        <button
          className="text-md py-2 px-8 border-2 border-primary rounded-3xl 
          "
        >
          Saiba Mais
        </button>
      </div>
    </div>
  );
}

export default Card;

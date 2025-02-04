import DesignTag from "../assets/icons/design_tag.svg";
import Figma from "../assets/icons/Figma.svg";

import EasyMarket from "../assets/icons/easymarket.png";
import EasyDemo from "../assets/images/easydemo.png";

export default function Card() {
  return (
    <div className="flex flex-col gap-4 w-1/3 bg-background-components border-2 border-stroke p-4 rounded-2xl m-8 min-h-[400px]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={EasyMarket} alt="EasyMarket Logo" width={32} height={32} />
          <label className="text-xl font-bold">EasyMarket</label>
        </div>
        <img src={DesignTag} alt="Design Tag" width={32} height={32} />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="relative h-8/10 border-2 border-primary overflow-hidden rounded-xl">
          {/* Background Color (Bottom Layer) */}
          <div className="absolute inset-0 bg-stroke z-0"></div>

          {/* Image (Above Background) */}
          <img
            src={EasyDemo}
            alt="Product"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />

          {/* Semi-Transparent Background (Above Image) */}
          <div className="absolute inset-0 bg-stroke opacity-75 z-20"></div>

          {/* Description (Top Layer) */}
          <div className="flex flex-col items-center justify-center absolute bottom-0 w-full h-1/2 bg-background opacity-70 z-30  border-t-2 border-black">
            <p className="text-justify p-2 text-sm font-semibold h-full overflow-hidden text-ellipsis">
              Minha atuação no EasyMarket foi focada no aprimoramento do design
              e na experiência do usuário (UI e UX). <br />O EasyMarket tem como
              objetivo tornar as compras do dia a dia mais práticas e
              organizadas.
              <br />
              <br />O aplicativo permite aos usuários criar listas de compras,
              visualizar supermercados próximos, acompanhar seu histórico de
              gastos e até consultar uma API para pesquisar alimentos e
              visualizar as calorias de cada item com base em uma quantidade
              específica de gramas, ajudando a tomar decisões mais informadas
              sobre a alimentação.
            </p>
          </div>
        </div>

        {/* Icon Section & Button */}
        <div className="flex justify-between items-center mt-auto">
          <div className="flex gap-4">
            <img src={Figma} alt="Figma" width={48} height={48} />
          </div>

          <button className="text-md py-2 px-8 border-2 border-primary rounded-3xl">
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  );
}

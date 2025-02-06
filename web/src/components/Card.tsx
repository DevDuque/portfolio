// Icons - Tags
import WebTag from "../assets/icons/web_tag.svg";
import AppleTag from "../assets/icons/apple_tag.svg";
import DesignTag from "../assets/icons/design_tag.svg";
import AndroidTag from "../assets/icons/mobile_tag.svg";

// Icons - Tech
import Figma from "../assets/icons/Figma.svg";

import TS from "../assets/icons/TS.svg";
import Node from "../assets/icons/Node.svg";
import React from "../assets/icons/React.svg";

import JS from "../assets/icons/JS.svg";
import CSS from "../assets/icons/CSS.svg";
import HTML from "../assets/icons/HTML.svg";

import XML from "../assets/icons/XML.svg";
import Java from "../assets/icons/Java.svg";
import Swift from "../assets/icons/Swift.svg";

import SQLite from "../assets/icons/SQLite.svg";
import Firebase from "../assets/icons/Firebase.svg";

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface CardProps {
  title: string;
  logo: string;
  image: string;
  description: ReactNode;
  link: string;
  type: "design" | "web" | "ios" | "android";
  tech: string[];
}

// Mapping of project type to their corresponding icons
const typeIcons: Record<CardProps["type"], string> = {
  design: DesignTag,
  web: WebTag,
  ios: AppleTag,
  android: AndroidTag,
};

// Mapping of technologies to their corresponding icons
const techIcons: Record<string, string> = {
  figma: Figma,

  ts: TS,
  node: Node,
  react: React,

  js: JS,
  css: CSS,
  html: HTML,

  xml: XML,
  java: Java,
  swift: Swift,

  sqlite: SQLite,
  firebase: Firebase,
};

export default function Card({
  title,
  logo,
  image,
  description,
  link,
  type,
  tech,
}: CardProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 w-1/3 shadow-xl bg-background-components border-2 border-stroke p-4 rounded-2xl min-h-[400px]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt={`${title} logo`} width={32} height={32} />
          <label className="text-xl font-bold">{title}</label>
        </div>
        <img
          src={typeIcons[type]}
          alt={`${type} icon`}
          width={32}
          height={32}
        />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="relative h-8/10 border-2 border-primary overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-stroke z-0"></div>
          <img
            src={image}
            alt={`${title} image`}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div className="absolute inset-0 bg-stroke opacity-75 z-20"></div>

          {/* Description */}
          <div className="flex flex-col items-center justify-center absolute bottom-0 w-full h-1/2  bg-background opacity-70 z-30 border-t-4 border-black">
            <p className="text-justify px-2 text-sm  h-full font-secondary font-semibold overflow-hidden text-ellipsis whitespace-normal break-words">
              {description}
            </p>
          </div>
        </div>

        {/* Tech Icons Section & Button */}
        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-wrap gap-4 h-full">
            {tech.map((techName) =>
              techIcons[techName] ? (
                <img
                  key={techName}
                  src={techIcons[techName]}
                  alt={techName}
                  width={48}
                  height={48}
                  className="cursor-pointer transition-transform hover:-translate-y-1"
                />
              ) : null
            )}
          </div>

          <button
            className="text-md font-bold py-2 px-8 border-2 border-primary rounded-3xl cursor-pointer hover:bg-primary hover:border-stroke hover:text-stroke transition-colors"
            onClick={() => (window.location.href = link)}
          >
            {t("see_more")}
          </button>
        </div>
      </div>
    </div>
  );
}

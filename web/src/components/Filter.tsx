import { useState } from "react";
import FilterIcon from "../assets/icons/filter.svg";
import FaDown from "../assets/icons/fadown.svg";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);

  const handleToggleFilters = () => {
    setIsOpen(!isOpen);
    setYearOpen(false);
    setTypeOpen(false);
  };

  return (
    <div className="flex w-full p-5 pb-0 gap-4">
      {/* Filter Icon positioned at the extreme right */}
      <button
        onClick={handleToggleFilters}
        className="ml-auto flex items-center focus:outline-none"
      >
        <img
          src={FilterIcon}
          alt="Filter icon"
          width={32}
          height={32}
          className={`${isOpen ? "fill-stroke" : ""}`}
        />
      </button>

      {/* Dropdown Buttons */}
      {isOpen && (
        <div className="flex gap-4 w-2/10">
          {/* Year Filter */}
          <div className="relative w-full">
            <button
              onClick={() => setYearOpen(!yearOpen)}
              className="flex items-center justify-center gap-2 py-1 w-full border-2 border-primary rounded-3xl text-lg font-medium focus:outline-none"
            >
              Year
              <img
                src={FaDown}
                className={`transform transition-transform duration-200 ${
                  yearOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {yearOpen && (
              <div className="absolute left-0 mt-2 w-fit bg-stroke shadow-lg rounded-lg border-4 border-background z-30">
                <ul>
                  {[2023, 2024, 2025].map((year) => (
                    <li
                      key={year}
                      className="px-4 py-2 text-main-text font-medium text-center text-xl cursor-pointer hover:bg-stroke transition-colors"
                    >
                      {year}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Type Filter */}
          <div className="relative w-full">
            <button
              onClick={() => setTypeOpen(!typeOpen)}
              className="flex items-center justify-center gap-2 py-1 w-full border-2 border-primary rounded-3xl text-lg font-medium focus:outline-none"
            >
              Type
              <img
                src={FaDown}
                className={`transform transition-transform duration-200 ${
                  typeOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {typeOpen && (
              <div className="absolute left-0 mt-2 w-fit bg-stroke shadow-lg rounded-lg border-4 border-background z-30">
                <ul>
                  {["Apple", "Design", "Mobile", "Web"].map((type) => (
                    <li
                      key={type}
                      className="px-4 py-2 text-main-text font-medium text-center text-xl cursor-pointer hover:bg-stroke transition-colors"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;

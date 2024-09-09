import { useState } from "react";

interface CategorySelectorProps {
  Difficulty: string[];
}

const CategorySelector = ({ Difficulty }: CategorySelectorProps) => {
  console.log(Difficulty);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  const handleSelect = (item: string) => {
    setSelectedDifficulty(item); 
  };
  return (
    <>
      <div className="flex mt-3 md:mt-8  justify-between gap-[4rem] md:gap-[6rem] items-center">
        <h4 className="font-bold text-xs md:text-sm">Difficulty</h4>
        <div className="flex gap-2">
          {Difficulty.map((item: string) => (
            <button
              key={item}
              onClick={() => handleSelect(item)}
              className={`font-bold border border-[#EBEBED] rounded-xl p-1 px-2  text-xxs md-text-xs text-center 
                   ${
                     selectedDifficulty === item
                       ? "bg-black text-white"
                       : "bg-transparent text-black"
                   } 
                   transition duration-300 ease-in-out`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySelector;

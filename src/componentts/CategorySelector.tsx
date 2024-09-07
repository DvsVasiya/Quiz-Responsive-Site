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
      <div className="flex mt-10 justify-between">
        <h4 className="font-bold text-sm">Difficulty</h4>
        <div className="flex gap-2">
          {Difficulty.map((item: string) => (
            <button
              key={item}
              onClick={() => handleSelect(item)}
              className={`font-bold border border-[#EBEBED] rounded-xl p-1 px-2 text-xs text-center 
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

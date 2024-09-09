import Button from "./Button";
import CategorySelector from "./CategorySelector";
import Heading from "./Heading";
import QuestionNumberSelector from "./QuestionNumberSelector";
import TimeLimit from "./TimeLimit";

const Card = () => {
  return (
    <div className="p-[0.7rem] md:p-[1.3rem]  border-2 rounded-lg  flex flex-col">
      <div>
        <Heading title="JavaScript" label="Test your javascirpt Knowelge" />
        <CategorySelector Difficulty={["Easy", "Medium", "Hard"]} />
        <QuestionNumberSelector />
        <TimeLimit />
        <Button />
      </div>
    </div>
  );
};

export default Card;

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // Initialize the hook

  const handleStartQuiz = () => {
    navigate('/quiz'); // Navigate to the "/quiz" route
  };
  return (
    <header className=" flex h-[10%] w-full border-b rounded  p-3 px-6 justify-between items-center font-bold text-base	flex-row">
      <div className="flex gap-1 md:gap-2">
        <span>#</span>
        <span>Quizzer</span>
      </div>
      <div className="flex gap-4 text-xs	items-center">
        <span>Dashboard</span>
        <button onClick={handleStartQuiz} className="border-[#EBEBED] font-bold bg-white">Star Quiz</button>
      </div>
    </header>
  );
};

export default Header;

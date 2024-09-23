import { Link } from "react-router-dom";
import History from "../assets/svgs/History";
import OldHistory from "../assets/svgs/OldHistory";
import Quiz from "../assets/svgs/Quiz";
import HeadingTitle from "../componentts/HeadingTitle";
import SummaryCard from "../componentts/SummaryCard";
import { useSelector } from "react-redux";

const Dashboard = () => {
 
  const OldHistory = useSelector(
    (state: any) => state.userHistory.history    
  );

  



  return (
      <div className="flex flex-col items-center h-full w-full ">
      <div className="w-[20rem] sxs:w-[30rem] md:w-[60rem]">
        <h2  className="my-4 text-2xl font-bold">Dashboard</h2>
        {/* Summarry  cards */}
        {/* Quiz me */}
        <div className="flex  gap-4">
          <div className="w-full">
            <Link to={"/"}>
          <SummaryCard title="Quiz me!" label={'Challenge yourself to a quiz with a topic of your choice'}>
            <Quiz />
          </SummaryCard>
            </Link>
          </div>
          <div className="w-full">
          {/* History */}
          <SummaryCard title="History" label="View past quiz attempts">
            <History />
          </SummaryCard>
          </div>
        </div>
        <div className="border  mt-4 p-5 px-6 w-full flex gap-2 flex-col rounded-lg">
            <div className='flex justify-between items-center'>
            <HeadingTitle label="Recent Activity" size="text-xl"  />
            </div>
            <div className='text-[#AFAEAC]   text-xs font-semibold'>You have played total of 4 Quiz</div>
{/* Old history */}
{
  OldHistory?.map((item) => (

    <PastQuiz quiz={item} />

  ))
}
          </div>
        </div>
    </div>
  );
};

export default Dashboard;


function PastQuiz ({quiz}) {
  return <div className="flex items-center gap-2">
  <div>
    <OldHistory />
  </div>
  <div className="flex flex-col">
      <span className="text-normal underline font-semibold">{quiz.tags}</span>
      <div className="p-1 text-center rounded text-[#AFAEAC] font-normal	text-xs bg-[#020617]">{quiz.quizDate}</div>
      <span className="text-[#AFAEAC]">Multiple Choice</span>
  </div>
</div>
}
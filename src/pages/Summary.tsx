import Accuracy from "../assets/svgs/Accuracy";
import Badge from "../assets/svgs/Badge";
import DashboardSvg from "../assets/svgs/DashboardSvg";
import Timer from "../assets/svgs/Timer";
import Trophy from "../assets/svgs/Trophy";
import HeadingTitle from "../componentts/HeadingTitle";
import SummaryCard from "../componentts/SummaryCard";

const Summary = () => {
  return (
    <div className="flex flex-col items-center h-full w-full ">
      <div className="w-[20rem] sxs:w-[30rem] md:w-[60rem]">
        {/* Header */}
        <div className="flex justify-between items-center my-4">
          <HeadingTitle label="Summary" size="text-2xl" />
          <button className="p-1 px-3 flex justify-center items-center text-xs">
            <DashboardSvg />
            Back to dashboard
          </button>
        </div>
        {/* Result card Section */}
        <div className=" p-3 px-4 border-2 w-full rounded-lg mb-3">
            {/* Result card header */}
          <div className="flex justify-between items-center">
            <HeadingTitle label="Results" size="text-xl" />
            <div >
              <Badge />
            </div>
          </div>
          {/* Result data */}
          <div className="flex justify-center items-center flex-col mb-2">
            <Trophy />
            <span className="text-[#825013] text-xl font-bold">Nice try!</span>
            <span className="text-sm font-medium text-[#AFAEAC]"> {`<`} 25% accuancy</span>
          </div>
        </div>
        {/* Summarry  cards */}
        <div className="flex  gap-4">
        <SummaryCard title="Average Accuancy" label="20%">
            <Accuracy />
        </SummaryCard>
        <SummaryCard title="Time Taknen" label="2m 31s">
            <Timer />
        </SummaryCard>
        </div>
        {/* Questions and answer */}
        <div className="mt-5 text-sm">
          {/* column title  */}
          <div className="text-sm">
            <ul className="flex gap-4 mb-2 text-[#AFAEAC] font-medium">
              <li className="w-4">No.</li>
              <li className="flex-1">Question & Correct Answer</li>
              <li>Your Answer</li>
            </ul>
          <hr />
          </div>
          {/* column value */}
          <div className="mt-2">
            <ul className="flex gap-4">
              <li className="w-4">1</li>
              <div className="flex-1 flex flex-col text-sm gap-4">
              <li className="">
                Which ancient civilzation developend the first known system of
                writing?
              </li>
              <span className="font-semibold ">Sumerians</span>
              </div>
             
              
              <li className="text-red-600 font-semibold">Sumerians</li>
            </ul>
           
          </div>
          <hr className="my-2" />
          <div className="mt-2">
            <ul className="flex gap-4">
              <li className="w-4">1</li>
              <li className="flex-1">
                Which ancient civilzation developend the first known system of
                writing?
                <span></span>
              </li>
              <li className="text-red-600 font-semibold">Sumerians</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

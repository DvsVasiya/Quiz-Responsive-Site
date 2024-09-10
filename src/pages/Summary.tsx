
import DashboardSvg from "../assets/svgs/DashboardSvg"
import HeadingTitle from "../componentts/HeadingTitle"

const Summary = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full ">
        <div className="w-[20rem] sxs:w-[30rem] md:w-[46rem]">
            {/* Header */}
            <div className="flex justify-between items-center">
            <HeadingTitle label="Summary" size="text-3xl" />
            <button className="flex justify-center  items-center">
                <DashboardSvg />
                Back to dashboard
            </button>
            </div>
                {/* Result card Section */}
                <div className="p-16 border w-full">
                <HeadingTitle label="Results" size="text-3xl" />
                </div>
                {/* Summarry  cards */}
                <div className="flex  gap-4">
                <div className="border  p-10   w-full">
                <HeadingTitle label="Average Accuancy" size="text-3xl" />
                <div>Hii</div>
                </div>
                <div className="border  p-10   w-full">
                <HeadingTitle label="Average Accuancy" size="text-3xl" />
                <div>Hii</div>
                </div>
                </div>
                {/* Questions and answer */}
                    <div className="">
                        {/* column title  */}
                        <div>
                            <ul className="flex gap-4">
                                <li className="w-4">No.</li>
                                <li className="flex-1">Question & Correct Answer</li>
                                <li>Your Answer</li>
                            </ul>
                            
                        </div>
                        {/* column value */}
                        <div>
                            <ul className="flex gap-4">
                                <li className="w-4">1</li>
                                <li className="flex-1">Which ancient civilzation developend the first known system of writing?
                                    <span></span>
                                </li>
                                <li>Sumerians</li>
                            </ul>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Summary
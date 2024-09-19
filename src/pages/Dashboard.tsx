import { useMemo } from "react";
import Card from "../componentts/Card";
import Footer from "../componentts/Footer";
import Header from "../componentts/Header";
import QuizData from "../data/quiz_data.json";

const Dashboard = () => {
  const filteredData = useMemo(() => {
    const getTagsFromData = QuizData.map((item) => {
      const [firstElement] = item;
      return firstElement;
    });

    return getTagsFromData;
  }, []);
  console.log(filteredData);

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className=" flex-grow flex gap-3 flex-col items-center w-full justify-center 	md:flex-row flex-wrap my-3 ">
        {filteredData.map((item) => (
          <Card quiz={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

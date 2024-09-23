import Card from "../componentts/Card";
import Footer from "../componentts/Footer";
import Header from "../componentts/Header";
import QuizData from "../data/quiz_data.json";

const Home = () => {
 
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className=" flex-grow flex gap-3 flex-col items-center w-full justify-center 	md:flex-row flex-wrap my-3 ">
        {QuizData.map((item) => (
          <Card quiz={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

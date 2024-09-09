import Card from "../componentts/Card";
import Footer from "../componentts/Footer";
import Header from "../componentts/Header";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full">
        <Header />
      <div className=" flex-grow flex gap-3 flex-col items-center w-full justify-center 	md:flex-row flex-wrap my-3 ">
        <Card />
        <Card />
        <Card />
      </div>
        <Footer />
    </div>
  );
};

export default Dashboard;

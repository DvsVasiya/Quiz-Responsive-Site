import Card from "../componentts/Card";
import Header from "../componentts/Header";

const Dashboard = () => {
  return (
    <div className="m-[0 auto]">
      <Header />
      <div className="flex gap-3 justify-center items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;

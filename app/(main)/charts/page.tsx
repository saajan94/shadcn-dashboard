import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import BarChart from "@/components/dashboard/BarChart";
import BackButton from "@/components/BackButton";
import PieChart from "@/components/dashboard/PieChart";

const ChartsPage = () => {
  return (
    <div>
      <BackButton text="Go Back" link="/" />
      <AnalyticsChart />
      <BarChart />
      <PieChart />
    </div>
  );
};

export default ChartsPage;

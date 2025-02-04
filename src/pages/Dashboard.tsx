import DailyEmissions from "../components/DailyEmissions";
import EnergySavings from "../components/EnergySavings";
import AirQuality from "../components/AirQuality";
import WeeklyTrends from "../components/WeeklyTrends";
import SustainabilityScore from "../components/SustainabilityScore";
import ResourceUsage from "../components/ResourceUsage";

const Dashboard = () => {
	return (
		<main className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			<DailyEmissions />
			<EnergySavings />
			<AirQuality />
			<WeeklyTrends />
			<SustainabilityScore />
			<ResourceUsage />
		</main>
	);
};

export default Dashboard;

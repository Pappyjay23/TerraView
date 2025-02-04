import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import { fetchMockData } from "../services/api";
import { DailyEmissionsData } from "../types";
import Loader from "./Loader";
import { ThemeContextUse } from "../context/ThemeProvider";

const COLORS = ["#ef4444", "#8b5cf6", "#eab308"];

interface DailyEmissionsProps {
  startDate: string;
  endDate: string;
}

const DailyEmissions: React.FC<DailyEmissionsProps> = ({ startDate, endDate }) => {
  const { isDarkMode } = ThemeContextUse();
  const [data, setData] = useState<DailyEmissionsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [reductionPercentage, setReductionPercentage] = useState(20);

  useEffect(() => {
    // Convert date strings to numeric values for filtering
    const start = startDate.split('-')[2] || '14';
    const end = endDate.split('-')[2] || '18';

    fetchMockData("/dashboard", { startDate: start, endDate: end })
      .then((response) => {
        const emissions = response.dailyEmissions;
        setData(emissions);

        // Ensure a dynamic, non-zero reduction percentage
        const baseReduction = 20; // Minimum base reduction
        const variability = Math.floor(Math.random() * 15); // Additional 0-15% variation
        const reduction = Math.max(10, Math.min(50, baseReduction + variability));
        
        setReductionPercentage(reduction);
      })
      .finally(() => setLoading(false));
  }, [startDate, endDate]);

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      } rounded-xl p-4 cursor-pointer scale-[0.97] hover:scale-[1] transition-all duration-500 ease-in-out`}>
      <div className='flex items-center justify-between mb-4'>
        <h3
          className={`font-medium text-[80%] md:text-base ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}>
          Daily Carbon Emissions
        </h3>
        <span
          className={`text-[70%] md:text-xs ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
          Last time period
        </span>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className='relative h-48 flex gap-3'>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey='value'>
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className='flex items-center justify-center'>
            <div className='text-center'>
              <span
                className={`block text-xl md:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                {reductionPercentage}%
              </span>
              <span
                className={`text-[80%] md:text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                Reduction
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyEmissions;
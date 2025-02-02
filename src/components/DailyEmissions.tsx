import { PieChart, Pie, Cell } from "recharts"

const data = [
  { name: "Transport", value: 47 },
  { name: "Energy", value: 75 },
  { name: "Waste", value: 82 },
]

const COLORS = ["#ef4444", "#8b5cf6", "#eab308"]

export default function DailyEmissions() {
  return (
    <div className="bg-gray-800 rounded-xl p-4 cursor-pointer scale-[0.97] hover:scale-[1] transition-all duration-500 ease-in-out">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-[80%] md:text-base">Daily Carbon Emissions</h3>
        <span className="text-[70%] md:text-xs text-gray-400">Last 24h</span>
      </div>
      <div className="relative h-48 flex gap-3">
        <PieChart width={200} height={200}>
          <Pie data={data} cx={100} cy={100} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <span className="block text-xl md:text-3xl font-bold">20%</span>
            <span className="text-[80%] md:text-sm text-gray-400">Reduction</span>
          </div>
        </div>
      </div>
    </div>
  )
}


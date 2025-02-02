import { useEffect, useState } from "react";
import { MdWaterDrop, MdBolt, MdRecycling } from "react-icons/md";

export default function ResourceUsage() {
  const [waterUsageWidth, setWaterUsageWidth] = useState(0);
  const [energyUsageWidth, setEnergyUsageWidth] = useState(0);
  const [wasteRecycledWidth, setWasteRecycledWidth] = useState(0);

  useEffect(() => {
    setWaterUsageWidth(75);
    setEnergyUsageWidth(62);
    setWasteRecycledWidth(89);
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl p-4 scale-[0.97] hover:scale-[1.02] transition-all duration-500 ease-in-out cursor-pointer">
      <h3 className="font-medium mb-4">Resource Usage</h3>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <MdWaterDrop className="h-6 w-6 text-blue-500" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-400">Water Usage</span>
              <span className="text-sm">75%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-in-out" style={{ width: `${waterUsageWidth}%` }} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-2 bg-yellow-500/20 rounded-lg">
            <MdBolt className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-400">Energy Usage</span>
              <span className="text-sm">62%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 rounded-full transition-all duration-1000 ease-in-out" style={{ width: `${energyUsageWidth}%` }} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <MdRecycling className="h-6 w-6 text-green-500" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-400">Waste Recycled</span>
              <span className="text-sm">89%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full transition-all duration-1000 ease-in-out" style={{ width: `${wasteRecycledWidth}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


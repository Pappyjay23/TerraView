import { useEffect, useState } from "react";
import { MdWaterDrop, MdBolt, MdRecycling } from "react-icons/md";

const resources = [
  { name: "Water Usage", icon: MdWaterDrop, color: "blue", initialWidth: 75 },
  { name: "Energy Usage", icon: MdBolt, color: "yellow", initialWidth: 62 },
  { name: "Waste Recycled", icon: MdRecycling, color: "green", initialWidth: 89 },
];

export default function ResourceUsage() {
  const [usageWidths, setUsageWidths] = useState(new Array(resources.length).fill(0));

  useEffect(() => {
    setUsageWidths(resources.map(resource => resource.initialWidth));
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl p-4 scale-[0.97] hover:scale-[1.02] transition-all duration-500 ease-in-out cursor-pointer">
      <h3 className="font-medium mb-4 text-[80%] md:text-base">Resource Usage</h3>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div key={resource.name} className="flex items-center gap-4">
            <div className={`p-2 bg-${resource.color}-500/20 rounded-lg`}>
              <resource.icon className={`text-${resource.color}-500 text-base md:text-xl`} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-[80%] md:text-sm text-gray-400">{resource.name}</span>
                <span className="text-[80%] md:text-sm">{resource.initialWidth}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className={`h-full bg-${resource.color}-500 rounded-full transition-all duration-1000 ease-in-out`} style={{ width: `${usageWidths[index]}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


import { useEffect, useState } from "react";
import { fetchMockData } from "../services/api";
import { ResourceData } from "../types";
import Loader from "./Loader";
import { MdBolt, MdRecycling, MdWaterDrop } from "react-icons/md";
import { IconType } from "react-icons";
import { ThemeContextUse } from "../context/ThemeProvider";

const iconMap: Record<string, IconType> = {
	MdWaterDrop: MdWaterDrop,
	MdBolt: MdBolt,
	MdRecycling: MdRecycling,
};

const ResourceUsage = () => {
	const [resources, setResources] = useState<ResourceData[]>([]);
	const [usageWidths, setUsageWidths] = useState<number[]>([]);
	const [loading, setLoading] = useState(true);
	const { isDarkMode } = ThemeContextUse();

	useEffect(() => {
		fetchMockData("/dashboard")
			.then((data) => {
				setResources(data.resourceUsage);
				setUsageWidths(new Array(data.resourceUsage.length).fill(0));

				setTimeout(() => {
					setUsageWidths(data.resourceUsage.map((resource) => resource.value));
				}, 200);
			})
			.finally(() => setLoading(false));
	}, []);

	return (
		<div
			className={`${
				isDarkMode ? "bg-gray-800" : "bg-gray-200"
			} rounded-xl p-4 cursor-pointer scale-[0.97] hover:scale-[1] transition-all duration-500 ease-in-out`}>
			<h3 className={`font-medium mb-4 text-[80%] md:text-base ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
				Resource Usage
			</h3>

			{loading ? (
				<Loader />
			) : (
				<div className='space-y-4'>
					{resources.map((resource, index) => {
						const Icon = iconMap[resource.icon];
						return (
							<div key={resource.name} className='flex items-center gap-4'>
								<div className={`p-2 bg-${resource.color}-500/30 rounded-lg`}>
									<Icon
										className={`text-${resource.color}-500 text-base md:text-xl`}
									/>
								</div>
								<div className='flex-1'>
									<div className='flex justify-between mb-1'>
										<span className={`text-[80%] md:text-sm text-gray-400 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
											{resource.name}
										</span>
										<span className={`text-[80%] md:text-sm ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}>
											{resource.value}%
										</span>
									</div>
									<div className='h-2 bg-gray-700 rounded-full overflow-hidden'>
										<div
											className={`h-full bg-${resource.color}-500 rounded-full transition-all duration-1000 ease-in-out`}
											style={{ width: `${usageWidths[index]}%` }}
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default ResourceUsage;

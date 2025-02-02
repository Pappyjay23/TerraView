import { MdInsertChart } from "react-icons/md";

export default function Statistics() {
	return (
		<div className='flex flex-col items-center justify-center h-[calc(100vh-80px)] md:bg-gray-900 rounded-lg p-6'>
			<MdInsertChart className='text-blue-500 text-3xl lg:text-5xl mb-4' />
			<h1 className='text-2xl md:text-3xl font-bold text-white mb-2'>Statistics</h1>
			<p className='text-base md:text-xl text-gray-400 mb-8 text-center'>
				Analyze your sustainability metrics
			</p>
			<div className='bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full'>
				<p className='text-gray-300 text-center text-[80%] md:text-base'>
					The Statistics feature is under development. Soon, you'll be able to
					view detailed analytics and reports on your sustainability efforts.
				</p>
				<div className='mt-6 bg-gray-700 h-2 rounded-full overflow-hidden'>
					<div className='bg-blue-500 h-full w-2/5 rounded-full'></div>
				</div>
				<p className='text-gray-400 text-sm text-center mt-2 text-[80%] md:text-base'>
					Feature completion: 40%
				</p>
			</div>
		</div>
	);
}

"use client";

import { formatNumber } from "@/utils";
import { listSkeletonStats } from "@/data";

interface props {
	stats: any;
	type: string;
}

export const Stats = ({ stats, type }: props) => {

	return (
		<div className='w-full px-3 pt-4'>
			<div className='w-full mt-4'>
				<h3 className='border-white border-b-2'>Summary Stats</h3>
				{stats.data === undefined ? (
					listSkeletonStats.map((res: any) => {
						return(
							<div key={res.no}>
								<div className='skeleton w-full h-5 my-1'></div>
							</div>
						)
					})
				) : stats.data?.length <= 0 ? (
					<div className='flex items-center justify-center w-full pt-4 '>
						<p className=''>There is no statistical data yet</p>
					</div>
				) : (
					<>
						<p className='text-md sm:text-sm'>
							{ type === 'anime' ? `Watching : ${formatNumber(stats.data?.watching)}` : `Reading : ${formatNumber(stats.data?.reading)}`}
						</p>
						<p className='text-md sm:text-sm'>
							Completed: {formatNumber(stats.data?.completed)}
						</p>
						<p className='text-md sm:text-sm'>
							On-Hold: {formatNumber(stats.data?.on_hold)}
						</p>
						<p className='text-md sm:text-sm'>
							Dropped: {formatNumber(stats.data?.dropped)}
						</p>
						<p className='text-md sm:text-sm'>
							{ type === 'anime' ? `Plan to Watch: ${formatNumber(stats.data?.plan_to_watch)}` : `Plan to Reading : ${formatNumber(stats.data?.plan_to_read)}`}
						</p>
						<p className='text-md sm:text-sm'>
							Total: {formatNumber(stats.data?.total)}
						</p>
					</>
				)}
			</div>
			<div className='w-full mt-4'>
				<h3 className='border-white border-b-2'>Score Stats</h3>
				<div className='flex flex-col'>
					{stats.data === undefined ? (
						listSkeletonStats.map((res: any) => {
							return(
								<div key={res.no}>
									<div className='skeleton w-full h-5 my-1'></div>
								</div>
							)
						})
					) : stats.data?.length <= 0 ? (
						<div className='flex items-center justify-center w-full pt-4 '>
							<p className=''>There is no score statistical data yet</p>
						</div>
					) : (
						stats.data?.scores.reverse().map((data: any, i: number) => {
							return (
								<div className='p-2 flex' key={i}>
									<p className='pr-4'>{data.score}</p>
									<progress
										className='progress progress-primary w-1/4 h-4 mt-1'
										value={data.percentage}
										max='100'
									></progress>
									<p className='pl-3'>
										{data.percentage}% ({formatNumber(data.votes)} votes)
									</p>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};
